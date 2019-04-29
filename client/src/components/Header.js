import React from 'react'
import { StyledRibbon } from '../elements/index'

const Header = () => {
    //styles can be updated + deleted after learning styling components
    const styles = {
        h1: {
            margin: '0 auto 30px auto',
            fontSize: '80px',
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
    return (
        <StyledRibbon>
            <h1 style={styles.h1}>t a s k ' r</h1>
        </StyledRibbon>
    )
}

export default Header
