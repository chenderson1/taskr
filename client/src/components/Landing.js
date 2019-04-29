import React from 'react'
import Login from './nav/Login'
import SignUp from './nav/SignUp'
import { StyledFlexPage } from '../elements/index'
import Greeting from './routedcomponents/Greeting'

const Landing = props => {
    
    return (
        <StyledFlexPage>
            
            <Greeting />
        </StyledFlexPage>
    )
}

export default Landing
