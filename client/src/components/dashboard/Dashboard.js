import React from 'react'
import TaskView from './TaskView'

import { StyledLoginButton, StyledFlexPage } from '../../elements/index'

const Dashboard = props => {
    return (
        <StyledFlexPage>
            <StyledLoginButton onClick={props.logoutUser}>Log Out</StyledLoginButton>
                <br></br> <br></br>
              <TaskView {...props}/>
            
        </StyledFlexPage>
    )
}

export default Dashboard
