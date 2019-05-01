import React, { Component } from 'react'
import { StyledTaskCard } from '../../elements/Card'
import axios from 'axios'
import AddTaskDisplay from './AddTaskDisplay'
import AddTaskForm from './AddTaskForm'

class AddTask extends Component {
    constructor() {
        super()
        this.state = {
            formToggle: false,
            title: '',
            description: '',
            newTask: {}
        }
    }

    //Working, used on AddTaskForm to save changes to state
    handleChange = (e) => {
        const { name, value } = e.target
        e.persist()
        this.setState({ [name]: value }, () => {this.updateNewTask()})
    }

    //Working, toggles display of AddTaskDisplay and AddTaskForm on AddTask component
    displayToggle = () => {
        this.setState(prevState => ({
          formToggle: !prevState.formToggle
        }))
    }

    //Working, called by handleChange to save changes to newTask
    updateNewTask = () => {
    this.setState({
        newTask: {
            title: this.state.title,
            description: this.state.description,
        }
        })
    }

    //Not working, need to get boardID reference working
    addNewTask = () => {
        axios.post('/api/tasks', this.state.newTask)
      .then(res => {
        this.setState({ 
          formToggle: false
        })
      })
      .catch(err => console.log(err.response.data.errMsg))
    }

    render() {
        const props = {
            handleChange: this.handleChange,
            displayToggle: this.displayToggle,
            addNewTask: this.addNewTask,
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