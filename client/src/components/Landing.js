import React from 'react'
import Login from './Login'
import SignUp from './SignUp'

const Landing = props => {
    const styles = {
        landingDiv: {
          border: 'solid darkred 1px',
          margin: '5px'
        }
      }
    return (
        <div style={styles.landingDiv}>
            Landing Filler
            <Login {...props} />
            <SignUp {...props} />
        </div>
    )
}

export default Landing
