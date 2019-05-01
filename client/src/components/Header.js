import React from 'react'
import { StyledHeader } from '../elements/index'

const Header = (props) => {
    //styles can be updated + deleted after learning styling components
    const styles = {
        h1: {
            marginBottom: '10px',
            fontSize: '70px',
            color: '#0c2716',
            display: 'inline-block',
        },
        img:{
            height: '55px',
            width: '45px',
            position: 'relative',
            display: 'inline-block',
            marginTop: '20px',
            right: '10px'
        }
    }
    const { isLoggedIn, quote } = props
    return (
        <StyledHeader>
            <h1 style={styles.h1}>t a s k ' r</h1>
        </StyledHeader>
    )
}

export default Header
