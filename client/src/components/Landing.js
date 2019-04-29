import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import { StyledFlexPage } from '../elements/index'
import Greeting from './Greeting'

const Landing = props => {
    
    return (
        <StyledFlexPage>
            {props.display === true ? <Login {...props} /> : <SignUp {...props} />}
            <Greeting />
        </StyledFlexPage>
    )
}

export default Landing
