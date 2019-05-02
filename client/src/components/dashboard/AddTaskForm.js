import React from 'react'

const AddTaskForm = props => {
    console.log(props)
    return (
        <div>
            Title: <input name='title' onChange={props.handleChange} value={props.newTask.title}></input>
            Description: <input name='description' onChange={props.handleChange} value={props.newTask.description}></input> <br></br>
            <button onClick={props.displayToggle}>Back</button><button onClick={props.addTask}>Add Task</button>
        </div>
    )
}

export default AddTaskForm