import React, { Component } from 'react';
import { StyledBoardButton } from '../../elements/Buttons'
import { StyledBoard, HighLightedBoard } from '../../elements/StyledBoard'

class Board extends Component {
    constructor(){
        super();
        this.state = {
            toggleHighlight: false,

        }
    }

    highlightToggle = () => {
        console.log(this.props.selectedBoard)
        // if(this.props._id === this.props.selectedBoard){
            this.setState(ps => {
                return {
                    toggleHighlight: !ps.toggleHighlight
                }
            })
        // } else {
        //     this.setState(ps => {
        //        return {
        //             toggleHighlight: !ps.toggleHighlight
        //             }
        //     })
        // }
    }


componentDidUpdate(prevProps, prevState){

    if(this.props.selectedBoard !== this.props._id && this.state.toggleHighlight){
        this.setState({ toggleHighlight : false })
    }
}

    render(){
    const { name, _id, deleteBoard, updateBoard, displayTasks } = this.props
    // if(this.state.toggleHighlight){
    // return (
    // <HighLightedBoard onClick={() => displayTasks(_id)}>
    //     <h1>{name}</h1><br></br>
    //     <StyledBoardButton onClick={() => updateBoard(_id)}>update</StyledBoardButton>
    //     <StyledBoardButton onClick={() => deleteBoard(_id)}>Delete</StyledBoardButton>
    //     </HighLightedBoard>
    //     )
    // }
    return (
        <StyledBoard isToggled={this.state.toggleHighlight} onClick={() => {
                this.highlightToggle()
                displayTasks(_id)
        }}>
                <h1>{name}</h1><br></br>
            <StyledBoardButton onClick={() => updateBoard(_id)}>update</StyledBoardButton>
            <StyledBoardButton onClick={() => deleteBoard(_id)}>Delete</StyledBoardButton>
        </StyledBoard>
    )
    }
}

export default Board;