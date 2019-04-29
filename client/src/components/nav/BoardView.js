import React from 'react'
import AddBoard from './AddBoard'

const BoardView = props => {
    const mappedBoards = props.boards.map((board, i) => {
        return <div key={i}><h1>{board.name}</h1></div>
    })
    return (
        //Here is where you would see board names
        <div>
            {mappedBoards}
            <AddBoard onChange={props.onChange}/>
        </div>
    )
}

export default BoardView
