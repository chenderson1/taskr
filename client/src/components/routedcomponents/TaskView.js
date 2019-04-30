import React from 'react'
import AddTask from './AddTask'

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
            <AddTask />
        </div>
    )
}

export default TaskView