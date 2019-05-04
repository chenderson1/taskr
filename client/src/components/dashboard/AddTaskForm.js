import React from 'react'

const AddTaskForm = props => {
    return (
        <div>
            Title:<br></br> <input name='title' onChange={props.handleChange} value={props.newTask.title}></input><br></br>
            Description:<br></br> <input name='description' onChange={props.handleChange} value={props.newTask.description}></input> <br></br>
            <button onClick={props.displayToggle}>Back</button><button onClick={props.addTask}>Add Task</button>
        </div>
    )
}

export default AddTaskForm 