import React, { Component } from "react";
import {
  StyledBoardIconDiv,
  StyledBoard,
  StyledBoardH2,
  StyledLoginButton
} from "../../elements/index";

class Board extends Component {
  constructor(props) {
    super();
    this.state = {
      toggleHighlight: false,
      edit: false,
      name: props.name,
      _id: props._id
    };
  }

  highlightToggle = () => {
    this.setState(ps => {
      return {
        toggleHighlight: !ps.toggleHighlight
      };
    });
  };

  editToggle = () => {
    this.setState(prevState => {
      return {
        edit: !prevState.edit
      };
    });
  };

  boardHandleChange = e => {
    e.persist();
    const { value } = e.target;
    this.setState({ name: value });
  };

  componentDidUpdate() {
    if (
      this.props.selectedBoard !== this.props._id &&
      this.state.toggleHighlight
    ) {
      this.setState({ toggleHighlight: false });
    }
  }

  render() {
    const { name, _id, deleteBoard, updateBoard, displayTasks } = this.props;
    return (
      <StyledBoard isToggled={this.state.toggleHighlight}>
        <StyledBoardH2
          onClick={() => {
            this.highlightToggle();
            displayTasks(_id);
          }}
        >
          {name}
        </StyledBoardH2>
        {this.state.edit === true ? (
          <form>
            <input
              name="name"
              placeholder="Enter Board Name..."
              onChange={this.boardHandleChange}
              value={this.state.name}
            />
            <br />
            <StyledLoginButton onClick={this.editToggle}>
              Cancel
            </StyledLoginButton>
            <StyledLoginButton
              onClick={e => {
                updateBoard(e, { _id: this.state._id, name: this.state.name });
              }}
            >
              Update Board
            </StyledLoginButton>
          </form>
        ) : (
          <span />
        )}
        {this.state.toggleHighlight && (
          <StyledBoardIconDiv>
            <i class="fas fa-trash" onClick={() => deleteBoard(_id)} />
            <i class="fas fa-edit" onClick={this.editToggle} />
          </StyledBoardIconDiv>
        )}
      </StyledBoard>
    );
  }
}

export default Board;
