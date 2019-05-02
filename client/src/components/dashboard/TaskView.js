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
      tasks: [],
      taskToDelete: ''
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
          tasks: [...data]
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
      console.log(taskToAdd)
  TaskrAxios.post(`/api/tasks/${this.props.selectedBoard}`, taskToAdd)
      .then(res => {
          console.log(res.data)
          this.getSpecificTasks()
      })
      .catch(err => console.log(err.response.data.errMsg))
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
       return <Task {...task} key={i} findTaskToDelete={this.findTaskToDelete}/> 
    }) 
    return (
      <div style={styles.tempStyle}>
        {this.props.User.username} <br></br>
        {mappedTasks}
        <AddTask selectedBoard={this.props.selectedBoard} onAdd={this.addNewTask}/>
      </div>
    );
  }
}

export default TaskView;
