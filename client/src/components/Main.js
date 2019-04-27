import React, { Component } from 'react'
import Landing from './Landing'
import Dashboard from './Dashboard'
import axios from 'axios'

class Main extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      isLoggedIn: false,
      userId: '',
      fName: '',
      lName: '',
      display: true,
    }
  }

  //Working, Used on Landing -> Login
    //Saves user data to State
  handleChange = (e) => {
    const { name, value } = e.target
    e.persist()
    this.setState({
      [name]: value
    })
  }

  //Not working, Used on Landing -> Login
  loginUser = (e) => {
    const { name, value } = e.target
    e.preventDefault()
    e.persist()
    //Add axios request to find user _id by username, prompts sign up if no match for username.  If successful, saves user data to state, changes loggedIn to true
    this.setState()
  }

  //Not working, Used on Landing -> SignUp
  registerUser = (e) => {
    const { name, value } = e.target
    //Add axios request to find if username is taken.  If successful, creates a new user using "User" model, takes them to Login.
  }

  //Not working, Used on Landing to toggle login/signup displays
  displayToggle = (e) => {
    const { name } = e.target
    e.persist()
    this.setState(prevState => ({
      [name]: !prevState.display
    }))
  }

  render() {
    const props = {
      loginUser: this.loginUser,
      handleChange: this.handleChange,
      displayToggle: this.displayToggle,
      ...this.state,
    }
    const styles = {
          mainDiv: {
            border: 'solid blue 1px',
            margin: '5px'
          }
        }
    return (
        <div style={styles.mainDiv}>
            <Landing {...props}/>
            <Dashboard {...props}/>
        </div>
    )
  } 
}

export default Main 
