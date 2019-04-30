import React from 'react'
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
