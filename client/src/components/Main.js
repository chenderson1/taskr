import React, { Component } from "react";
import Landing from "./landing/Landing";
import Dashboard from "./dashboard/Dashboard";
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
      newUser: {},
      User: {
        boards: []
      },
      selectedBoard: '',
      quote: "",
      isEdit: false,
      updateThisBoard: "",
     
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

  //Working, Used on Nav -> Login / SignUp
    //Saves user data to State, calls updateNewUser
  handleChange = (e) => {
    const { name, value } = e.target
    e.persist()
    this.setState({ [name]: value }, () => {this.updateNewUser()})
  }

  //Working, called by handleChange, saves state data to newUser
  updateNewUser = () => {
    this.setState({
      newUser: {
        name: `${this.state.fName} ${this.state.lName}`,
        username: this.state.username,
        password: this.state.password
      }
    })
  }

  // Working, Used on Nav -> SignUp
  registerUser = () => {
    axios.post('/api/users', this.state.newUser)
      .then(res => {
        this.setState({ 
          User: res.data,
          isLoggedIn: true
        })
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  //Not working, Used on Nav -> Login
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
    // if(this.state.userId){
    axios.get(`/api/boards/${this.state.userId}`).then(res => {
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
  // };
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
      this.getUserBoards();
    })
  }

  // "Add Board" functionality
  boardHandleSubmit = boardName => {
    if(boardName._id){
     return this.editBoard(boardName)
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

  displayTasks = boardId => {
    // console.log(boardId)
    this.setState({ selectedBoard : boardId })
  }

  addTask = () => {
    
  }

  render() {
    const props = {
      loginUser: this.loginUser,
      logoutUser: this.logoutUser,
      registerUser: this.registerUser,
      handleChange: this.handleChange,
      boardHandleSubmit: this.boardHandleSubmit,
      displayToggle: this.displayToggle,
      postUserBoards: this.postUserBoards,
      deleteBoard: this.deleteBoard,
      updateBoard: this.updateBoard,
      editBoard: this.editBoard,
      displayTasks: this.displayTasks,
      ...this.state
    };
    const styles = {
      mainDiv: {
        display: "grid",
        gridTemplateColumns: "230px auto"
      }
    };
    return (
      <div>
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
