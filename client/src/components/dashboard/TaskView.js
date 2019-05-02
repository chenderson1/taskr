import React, { Component } from "react";
import AddTask from "./AddTask";
import Task from "./Task";
import axios from "axios";

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
    axios.get(`/api/tasks/${selectedBoard}`).then(res => {
      const data = res.data;
      console.log(data)
      this.setState(ps => {
        return {
          tasks: [...data, ...ps.tasks]
        };
      });
    });
  };
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
       return <Task {...task} key={i}/> 
    }) 
    console.log(mappedTasks)
    return (
      <div style={styles.tempStyle}>
        {this.props.User.username} <br />
        Here is where the tasks for each board will be displayed.
        {mappedTasks}
        <AddTask selectedBoard={this.props.selectedBoard}/>
      </div>
    );
  }
}

export default TaskView;
