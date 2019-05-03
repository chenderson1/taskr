import React, { Component } from 'react'
import { StyledTaskCard } from '../../elements/Card'
import axios from 'axios'
import AddTaskDisplay from './AddTaskDisplay'
import AddTaskForm from './AddTaskForm'
const TaskrAxios = axios.create();

TaskrAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

class AddTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formToggle: false,
            newTask: {
                boardId: this.props.selectedBoard,
                title: this.props.taskToUpdateTitle ? this.props.taskToUpdateTitle : '',
                description: this.props.taskToUpdateDescription ? this.props.taskToUpdateDescription : ''
            }
        }
    }

    updateFormToggle = () => {
        if(this.props.taskToUpdateTitle){
            this.setState({ formToggle : true })
        }
    }

    //Working, used on AddTaskForm to save changes to state
    handleChange = (e) => {
        const { name, value } = e.target
        e.persist()
        this.setState(ps  => ({
            newTask: { 
                ...ps.newTask,
                [name]: value 
            }
        }))
    }

    //Working, toggles display of AddTaskDisplay and AddTaskForm on AddTask component
    displayToggle = () => {
        console.log(this.props.selectedBoard)
        this.setState(prevState => ({
          formToggle: !prevState.formToggle
        }))
    }

    // Working, called by handleChange to save changes to newTask
    updateNewTask = () => {
    this.setState({ newTask: {
            title: this.state.title,
            description: this.state.description
            }
        })
    }

    // Working
    addTask = e => {
        e.preventDefault()
        this.props.onAdd(this.state.newTask)
        this.setState({ 
          formToggle: false,
          newTask: {
              title: '',
              description: ''
          }
      })
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevState.newTask.boardId !== this.props.selectedBoard){
            this.setState({newTask: {boardId: this.props.selectedBoard}});
        }
    }

    render() {
        const props = {
            handleChange: this.handleChange,
            displayToggle: this.displayToggle,
            addTask: this.addTask,
            updateNewTask: this.updateNewTask,
            ...this.state
        }
        return (
            <StyledTaskCard>
                {this.state.formToggle ? <AddTaskForm {...props} /> : <AddTaskDisplay {...props}/>} 
            </StyledTaskCard>
        )
    }
}

export default AddTask