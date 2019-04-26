import React from 'react'

const Login = props => {
    const styles = {
        loginDiv: {
            width: '300px',
            height: '200px',
            border: 'solid black 1px'
        }
    }
    return (
        <div style={styles.loginDiv}>
            User sees this first<br></br>
            Login <br></br>
            Username: <input name='username' placeholder='Enter username here' onChange={props.handleChange}></input> <br></br>
            <button>Sign Up</button><button>Continue</button>
        </div>
    )
}

export default Login
