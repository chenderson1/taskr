import React from 'react'
import AddBoard from './AddBoard'
import { StyledBoardButton } from '../../elements/Buttons'


const BoardView = props => {
    const { deleteBoard, updateBoard, updateThisBoard, isEdit, onEdit } = props
    const mappedBoards = props.boards.map((board, i) => {
        return (
        <div key={i}>
        <h1>{board.name}</h1><br></br>
        <StyledBoardButton onClick={() => updateBoard(board._id)}>update</StyledBoardButton>
        <StyledBoardButton onClick={() => deleteBoard(board._id)}>Delete</StyledBoardButton>
        </div>
        )
    })
    console.log(updateThisBoard)
    return (
        //Here is where you would see board names
        <div>
            {mappedBoards}
            <AddBoard onChange={props.onChange} onSubmit={props.onSubmit} value={props.addBoard} updateThisBoardName={updateThisBoard.name} updateThisBoardId={updateThisBoard._id} isEdit={isEdit} onEdit={onEdit}/>
        </div>
    )
}

export default BoardView
