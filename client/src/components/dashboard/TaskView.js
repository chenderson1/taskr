import React from 'react'
import AddTask from './AddTask'
import Task from './Task'
import { StyledLoginButton, StyledTaskPage } from '../../elements/index'

const TaskView = props => {
    return (
        <StyledTaskPage>
            {props.User.username} <br></br>
            <Task />
            <AddTask />
            <StyledLoginButton onClick={props.logoutUser}>Log Out</StyledLoginButton>
        </StyledTaskPage>
    )
}

export default TaskView