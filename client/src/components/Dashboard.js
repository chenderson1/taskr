import React from 'react'
import TaskView from './routedcomponents/TaskView'

import { StyledLoginButton, StyledFlexPage } from '../elements/index'

const Dashboard = props => {
    const styles = {
        dashDiv: {
          border: 'solid orchid 1px',
          margin: '5px'
        }
      }
    return (
        <StyledFlexPage>
            <StyledLoginButton onClick={props.logoutUser}>Log Out</StyledLoginButton>
                <br></br> <br></br>
              <TaskView />
            
        </StyledFlexPage>
    )
}

export default Dashboard
