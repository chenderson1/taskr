import React, { Component } from "react";
import { StyledLoginButton } from "../../elements/index";

class AddBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.updateThisBoardName ? this.props.updateThisBoardName : '',
            _id: this.props.updateThisBoardId ? this.props.updateThisBoardId : '' 
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.updateThisBoardName !== this.props.updateThisBoardName){
            this.setState({ name : this.props.updateThisBoardName })
        }
    }

    boardHandleChange = e => {
        e.persist();
        const { value } = e.target;
        this.setState({ name : value, _id: this.props.updateThisBoardId });
      };
    
      handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.onSubmit(this.state)
        this.setState({name: ''})
      }

  render() {
    const styles = {
      tempStyle: {
        border: "1px solid black"
      }
    };
    return (
      //This is where you would be able to add a board
      <div style={styles.tempStyle}>
        <form
          onSubmit={e => {this.handleSubmit(e)}}
        >
          <input
            name="name"
            placeholder="Please add board here"
            onChange={this.boardHandleChange}
            value={this.state.name}
          />
          <br />
          <StyledLoginButton>Add Board</StyledLoginButton>
        </form>
      </div>
    );
  }
}

export default AddBoard;
