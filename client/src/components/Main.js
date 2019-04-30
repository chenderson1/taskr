import React, { Component } from "react";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import axios from "axios";
import Nav from "./nav/Nav";
import Header from './Header'

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
      User: {}
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

  boardaHndleChange = e => {
    const { value } = e.target;
    e.persist();
    this.setState(ps => {
      return {
        user: {
          board: [value, ...ps.board]
        }
      }
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
    axios.get('http://quotes.rest/qod.json')
    .then(res => {
      const quote = res.data.contents.quotes[0].quote
      this.setState({quote: quote})
    })
  }
  // NOT working - gets boards by user id
  getUserBoards = () => {
    axios.get(`/api/boards/${this.state.userId}`).then(res => {
      const data = res.data;
      this.setState(ps => {
        return {
          User: {
            boards: [data, ...ps.boards]
          }
        };
      });
    });
  }
    componentDidMount() {
     this.getQuote();
     this.getUserBoards();
  }

  render() {
    const props = {
      loginUser: this.loginUser,
      logoutUser: this.logoutUser,
      handleChange: this.handleChange,
      displayToggle: this.displayToggle,
      ...this.state
    };
    const styles = {
      mainDiv: {
        border: "solid blue 1px",
        margin: "5px",
        display: "grid",
        gridTemplateColumns: "auto auto"
      }
    };
    return (
      <div>
        {this.state.isLoggedIn ? <Header {...props}/> : null}
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
