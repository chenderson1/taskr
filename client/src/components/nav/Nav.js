import React from 'react'
import {StyledBase} from '../../elements/index'
import BoardView from './BoardView'
import Login from './Login'
import SignUp from './SignUp'

const Nav = props => {
    return (
        <StyledBase>
            {props.isLoggedIn === false ? (props.display === true ? <Login {...props} /> : <SignUp {...props} />) : <BoardView />}
        </StyledBase>
    )
}

export default Nav
