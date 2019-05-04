import React, { Component } from 'react';
import { StyledBoardButton } from '../../elements/Buttons'
import { StyledBoard } from '../../elements/StyledBoard'

class Board extends Component {
    constructor(){
        super();
        this.state = {
            toggleHighlight: false,

        }
    }

    highlightToggle = () => {
            this.setState(ps => {
                return {
                    toggleHighlight: !ps.toggleHighlight
                }
            })
    }


componentDidUpdate(){
    if(this.props.selectedBoard !== this.props._id && this.state.toggleHighlight){
        this.setState({ toggleHighlight : false })
    }
}

    render(){
    const { name, _id, deleteBoard, updateBoard, displayTasks } = this.props
    return (
        <StyledBoard isToggled={this.state.toggleHighlight} onClick={() => {
                this.highlightToggle()
                displayTasks(_id)
        }}>
                <h1>{name}</h1><br></br>
            <StyledBoardButton onClick={() => updateBoard(_id)}>update</StyledBoardButton>
            <StyledBoardButton onClick={() => deleteBoard(_id)}>delete</StyledBoardButton>
        </StyledBoard>
    )
    }
}

export default Board;