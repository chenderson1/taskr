import React, { Component } from "react";
import AddTask from "./AddTask";
import Task from "./Task";
import axios from 'axios'
const TaskrAxios = axios.create();

TaskrAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

class TaskView extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
  }
  getSpecificTasks = () => {
      console.log(this.props.selectedBoard)
    const { selectedBoard } = this.props;
    TaskrAxios.get(`/api/tasks/${selectedBoard}`).then(res => {
      const data = res.data;
      console.log(data)
      this.setState(ps => {
        return {
          tasks: [...data],
          taskToUpdate: []
        };
      });
    });
  };

  findTaskToDelete = taskId => {
    TaskrAxios.delete(`/api/tasks/task/${taskId}`)
    .then(res => {
        console.log(res.data)
        this.getSpecificTasks();
    })
  }
 

  addNewTask = taskToAdd => {
  TaskrAxios.post(`/api/tasks/${this.props.selectedBoard}`, taskToAdd)
      .then(res => {
          console.log(res.data)
          this.getSpecificTasks()
      })
      .catch(err => console.log(err.response.data.errMsg))
    }

    updateTask = taskId => {
        const taskUpdate = this.state.tasks.find(task => task._id === taskId)
        console.log(taskUpdate)
        this.setState({ taskToUpdate: taskUpdate })
        console.log(this.state)
    }

  componentDidUpdate(prevProps){
      if(prevProps.selectedBoard !== this.props.selectedBoard){
        this.getSpecificTasks()
      }
  }

  render() {
    const styles = {
      tempStyle: {
        border: "1px solid black"
      }
    };

    const mappedTasks = this.state.tasks.map((task, i) => {
       return <Task {...task} key={i} findTaskToDelete={this.findTaskToDelete} updateTask={this.updateTask}/> 
    }) 
    return (
      <div style={styles.tempStyle}>
        {this.props.User.username} <br></br>
        {mappedTasks}
        <AddTask selectedBoard={this.props.selectedBoard} onAdd={this.addNewTask}/> {/*taskToUpdateTitle={this.state.taskToUpdate.title} taskToUpdateDescription={this.state.taskToUpdate.description}/>*/}
      </div>
    );
  }
}

export default TaskView;
