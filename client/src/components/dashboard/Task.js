import React from 'react'
import { StyledTaskCard, StyledH3, StyledSpan } from '../../elements/index'

const Task = props => {
    console.log(props.task.length)
        // const mappedTasks = props.map((task, i) => {
            return (
                <StyledTaskCard>
                   <StyledH3>{props.title}</StyledH3>{/* Replace with code below when task connected properly */}
                   <StyledSpan>{props.description}</StyledSpan>
                </StyledTaskCard>
            )
}

export default Task


// Title: {props.title} -- {props.username} <br></br>
// Description: {props.description} <br></br>
// Due: {props.due}