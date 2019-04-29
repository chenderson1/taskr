import React from 'react'
import { StyledTaskCard } from '../../elements/index'

const Task = props => {
    return (
        <StyledTaskCard>
            Title: {props.title} -- {props.username} <br></br>
            Description: {props.description} <br></br>
            Due: {props.due}
        </StyledTaskCard>
    )
}

export default Task
