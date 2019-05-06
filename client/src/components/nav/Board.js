import React, { Component } from "react";
import { StyledBoardButton } from "../../elements/Buttons";
import { StyledBoard } from "../../elements/StyledBoard";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleHighlight: false,
      progress: {
        percent: Math.floor(Math.random() * 100),
        numOfCompletedTask: 0,
        status: "success"
      }
    };
  }

  highlightToggle = () => {
    this.setState(ps => {
      return {
        toggleHighlight: !ps.toggleHighlight
      };
    });
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

    const theme = {
      error: {
        symbol: this.state.progress.percent + "%",
        trailColor: "pink",
        color: "red"
      },
      default: {
        symbol: this.state.progress.percent + "%",
        trailColor: "lightblue",
        color: "blue"
      },
      active: {
        symbol: this.state.progress.percent + "%",
        trailColor: "yellow",
        color: "orange"
      },
      success: {
        symbol: this.state.progress.percent + "%",
        trailColor: "fea42a",
        color: "#ff7300"
      }
    };

    return (
      <StyledBoard
        isToggled={this.state.toggleHighlight}
        onClick={() => {
          this.highlightToggle();
          displayTasks(_id);
        }}
      >
        <h1>{name}</h1>
        <br />
        <Progress
          theme={theme}
          percent={this.state.progress.percent}
          status={this.state.progress.status}
        />
        <br />
        <StyledBoardButton onClick={() => updateBoard(_id)}>
          update
        </StyledBoardButton>
        <StyledBoardButton onClick={() => deleteBoard(_id)}>
          delete
        </StyledBoardButton>
      </StyledBoard>
    );
  }
}

export default Board;
