import React from 'react'
import { StyledTaskCard, StyledH3, StyledSpan, StyledBoardButton } from '../../elements/index'

const Task = props => {
    console.log(props)
        return (
            <StyledTaskCard>
               <StyledH3>{props.title}</StyledH3>{/* Replace with code below when task connected properly */}
               <StyledSpan>{props.description}</StyledSpan>
                {/*<StyledSpan>{props.time}</StyledSpan>*/}
                <StyledBoardButton onClick={() => props.findTaskToDelete(props._id)}>delete</StyledBoardButton>
                <StyledBoardButton>update</StyledBoardButton>
            </StyledTaskCard>
        )
    }

export default Task


// Title: {props.title} -- {props.username} <br></br>
// Description: {props.description} <br></br>
// Due: {props.due}