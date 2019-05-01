import React, { Component } from "react";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import axios from "axios";
import Nav from "./nav/Nav";
import Header from "./Header";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      isLoggedIn: false,
      userId: "",
      fName: "",
      lName: "",
      display: true,
      quote: "",
      isEdit: false,
      updateThisBoard: "",
      User: {
        boards: []
      }
    };
  }

  //Not Working, used in axios requests to find user by username
  findUsername = () => {
    console.log("findUsername called");
    // axios.get(`api/userRoutes/${this.state.username}`)
    //   .then(res => {
    //     this.setState({ User: res.data })
    //   })
    //   .catch(err => console.log(err.response.data.errMsg))
  };

  //Working, Used on Landing -> Login
  //Saves user data to State
  handleChange = e => {
    const { name, value } = e.target;
    e.persist();
    this.setState({
      [name]: value
    });
  };

  //Not working, Used on Landing -> Login
  loginUser = () => {
    this.setState({ isLoggedIn: true });
    //Use the below code when routes are working:
    // this.findUsername()
    // this.state.User.password === this.state.password ? this.setState({ isLoggedIn: true}) : this.setState({ isLoggedIn: false })
    //If true, saves User data to state and changes loggedIn to true
  };

  //Temporary toggle to swap between greeting and taskview
  logoutUser = () => {
    this.setState({ isLoggedIn: false });
  };

  //Not working, Used on Landing -> SignUp
  registerUser = () => {
    this.setState({ User: {} }); //Clears User field to make ternary work properly
    this.findUsername();
    this.User !== {}
      ? axios.post("/api/userRoutes").then(this.loginUser()) //If true, POST and login
      : alert("Sorry, that username is taken, please choose a different one!"); //If false, prompt user to choose a new username
  };

  //Working, Used on Landing to toggle login/signup displays
  displayToggle = e => {
    const { name } = e.target;
    e.persist();
    this.setState(prevState => ({
      [name]: !prevState.display
    }));
  };

  // Works, gets the quote of the
  // day and displays it in the header after login
  getQuote = () => {
    axios.get("http://quotes.rest/qod.json").then(res => {
      const quote = res.data.contents.quotes[0].quote;
      this.setState({ quote: quote });
    });
  };
  // NOT working - gets boards by user id
  getUserBoards = () => {
    axios.get(`/api/boards/5cc7adabc7f653c7458489ca`).then(res => {
      const data = res.data;
      this.setState(ps => {
        return {
          User: {
            ...ps.User,
            boards: data
          }
        };
      });
    });
  };

  deleteBoard = id => {
    axios.delete(`/api/boards/board/${id}`);
    this.getUserBoards();
  };

  updateBoard = id => {
    const formToUpdate = this.state.User.boards.find(board => board._id === id);
    this.setState(ps => {
      return {
        updateThisBoard: formToUpdate,
        isEdit: !ps.isEdit
      };
    });
  };

  editBoard = boardToEdit => {
    axios.put(`/api/boards/board/${boardToEdit._id}`, boardToEdit)
    .then(res => {
      console.log(res.data)
    })
  }

  // "Add Board" functionality
  boardHandleSubmit = boardName => {
    if(boardName._id){
      this.editBoard(boardName)
    }
    axios.post("/api/boards/5cc7adabc7f653c7458489ca", boardName).then(res => {
      console.log(res.data);
      this.getUserBoards();
    });
  };
  componentDidMount() {
    this.getQuote();
    this.getUserBoards();
  }

  render() {
    const props = {
      loginUser: this.loginUser,
      logoutUser: this.logoutUser,
      handleChange: this.handleChange,
      boardHandleSubmit: this.boardHandleSubmit,
      displayToggle: this.displayToggle,
      postUserBoards: this.postUserBoards,
      deleteBoard: this.deleteBoard,
      updateBoard: this.updateBoard,
      editBoard: this.editBoard,
      ...this.state
    };
    const styles = {
      mainDiv: {
        display: "grid",
        gridTemplateColumns: "auto auto"
      }
    };
    return (
      <div>
        {this.state.isLoggedIn ? <Header {...props} /> : null}
        <div style={styles.mainDiv}>
          <Nav {...props} />
          {this.state.isLoggedIn === false ? (
            <Landing {...props} />
          ) : (
            <Dashboard {...props} />
          )}
        </div>
      </div>
    );
  }
}

export default Main;
