import React, { Component } from 'react'
import Landing from './Landing'
import Dashboard from './dashboard/Dashboard'
import axios from 'axios'
import Nav from './nav/Nav'

class Main extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
      userId: '',
      fName: '',
      lName: '',
      display: true,
      newUser: {},
      User: {},
    }
  }

  //Not Working, used in axios requests to find user by username
  findUsername = () => {
    console.log('findUsername called')
    // axios.get(`api/userRoutes/${this.state.username}`)
    //   .then(res => {
    //     this.setState({ User: res.data })
    //   })
    //   .catch(err => console.log(err.response.data.errMsg))
  }

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
    this.setState({ isLoggedIn: true })
      //Use the below code when routes are working:
      // this.findUsername()
      // this.state.User.password === this.state.password ? this.setState({ isLoggedIn: true}) : this.setState({ isLoggedIn: false })
      //If true, saves User data to state and changes loggedIn to true
  }

  //Temporary toggle to swap between greeting and taskview
  logoutUser = () => {
    this.setState({ isLoggedIn: false })
  }

  //Working, Used on Nav -> Login / SignUp  to toggle login/signup display
  displayToggle = (e) => {
    const { name } = e.target
    e.persist()
    this.setState(prevState => ({
      [name]: !prevState.display
    }))
  }

  addTask = () => {
    
  }

  render() {
    const props = {
      loginUser: this.loginUser,
      logoutUser: this.logoutUser,
      registerUser: this.registerUser,
      handleChange: this.handleChange,
      displayToggle: this.displayToggle,
      ...this.state,
    }
    const styles = {
          mainDiv: {
            display: 'grid',
            gridTemplateColumns: 'auto auto'
          }
        }
    return (
        <div style={styles.mainDiv}>
            <Nav  {...props}/>
            {this.state.isLoggedIn === false ? <Landing {...props}/> : <Dashboard {...props}/> }
            
        </div>
    )
  } 
}

export default Main 
