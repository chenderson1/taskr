import React from 'react'
import AddBoard from './AddBoard'
import Board from './Board';


const BoardView = props => {
    const { updateThisBoard, isEdit, onEdit} = props
    const mappedBoards = props.boards.map((board, i) => {
        return <Board key={i} {...board} {...props}/>
    })
    return (
        //Here is where you would see board names
        <div>
            {mappedBoards}
            <AddBoard onChange={props.onChange} onSubmit={props.onSubmit} value={props.addBoard} updateThisBoardName={updateThisBoard.name} updateThisBoardId={updateThisBoard._id} isEdit={isEdit} onEdit={onEdit}/>
        </div>
    )
}

export default BoardView
