import React from 'react'
import DashHeader from './DashHeader'
import Nav from './Nav'
import Board from './Board'

const Dashboard = () => {
    const styles = {
        dashDiv: {
          border: 'solid orchid 1px',
          margin: '5px'
        }
      }
    return (
        <div style={styles.dashDiv}>
            Dashboard Filler
            <DashHeader />
            <Nav />
            <Board />
        </div>
    )
}

export default Dashboard
