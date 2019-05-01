import React from 'react'
import AddTask from './AddTask'
import Task from './Task'

const TaskView = props => {
    const styles = {
        tempStyle: {
            border: '1px solid black'
        }
    }
    return (
        <div style={styles.tempStyle}>
            {props.User.username} <br></br>
            Here is where the tasks for each board will be displayed.
            <Task />
            <AddTask />
        </div>
    )
}

export default TaskView