import React from 'react';
import { StyledBoardButton } from '../../elements/Buttons'

const Board = props => {
    const { name, _id, deleteBoard, updateBoard, displayTasks } = props
    return (
    <div onClick={() => displayTasks(_id)}>
        <h1>{name}</h1><br></br>
        <StyledBoardButton onClick={() => updateBoard(_id)}>update</StyledBoardButton>
        <StyledBoardButton onClick={() => deleteBoard(_id)}>Delete</StyledBoardButton>
        </div>
    )
}

export default Board;