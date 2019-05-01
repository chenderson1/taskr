import React from 'react'

const AddTaskDisplay = props => {
    return (
        <div>
            Add Task <br></br>
            <i className="fas fa-plus-square fa-2x" onClick={props.displayToggle}></i>
        </div>
    )
}

export default AddTaskDisplay
