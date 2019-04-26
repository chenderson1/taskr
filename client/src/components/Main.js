import React from 'react'
import Landing from './Landing'
import Dashboard from './Dashboard'

const Main = () => {
    const styles = {
        mainDiv: {
          border: 'solid blue 1px',
          margin: '5px'
        }
      }
    return (
        <div style={styles.mainDiv}>
            <Landing />
            <Dashboard />
        </div>
    )
}

export default Main 
