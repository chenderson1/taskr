import React from 'react'

const AddTaskForm = props => {
    return (
        <div>
            Title: <input name='title' onChange={props.handlechange}></input>
            Description: <input name='description' onChange={props.handlechange}></input> <br></br>
            <button onClick={props.displayToggle}>Back</button><button onClick={props.addNewTask}>Add Task</button>
        </div>
    )
}

export default AddTaskForm