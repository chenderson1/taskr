import React from 'react'

const SignUp = props => {
    const styles = {
        signUpDiv: {
            width: '300px',
            height: '200px',
            border: 'solid black 1px'
        }
    }
    return (
        <div style={styles.signUpDiv}>
            This gets displayed on 'Sign Up' button click from Login component<br></br>
            Sign Up <br></br>
            First Name: <input name='fName' placeholder='Enter first name' onChange={props.handleChange}></input> <br></br>
            Last Name: <input name='lName' placeholder='Enter last name' onChange={props.handleChange}></input> <br></br>
            Username: <input name='username' placeholder='Enter username' onChange={props.handleChange}></input> <br></br>
            <button name='display' onClick={props.displayToggle}>Back</button><button>Sign Up</button>
        </div>
    )
}

export default SignUp