import React from 'react'
import { StyledTaskCard, StyledH3, StyledSpan } from '../../elements/index'

const Task = props => {
    console.log(props)
    return (
        <StyledTaskCard>
           <StyledH3>Wash the dishes</StyledH3>{/* Replace with code below when props connected properly */}
           <StyledSpan>Unload clean dishes from the dishwasher, then load dirty dishes from sink and start the dishwasher.</StyledSpan>
        </StyledTaskCard>
    )
}

export default Task


// Title: {props.title} -- {props.username} <br></br>
// Description: {props.description} <br></br>
// Due: {props.due}