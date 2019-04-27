import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import { StyledFlexPage } from '../elements/index'

const Landing = props => {
    
    return (
        <StyledFlexPage>
            {props.display === true ? <Login {...props} /> : <SignUp {...props} />}
        </StyledFlexPage>
    )
}

export default Landing
