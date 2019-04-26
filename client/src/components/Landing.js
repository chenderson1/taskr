import React from 'react'
import Login from './Login'

const Landing = () => {
    const styles = {
        landingDiv: {
          border: 'solid darkred 1px',
          margin: '5px'
        }
      }
    return (
        <div style={styles.landingDiv}>
            Landing Filler
            <Login />
        </div>
    )
}

export default Landing
