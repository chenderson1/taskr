import React from 'react'
import { StyledRibbon } from '../elements/index'

const Header = (props) => {
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
    const { isLoggedIn, quote } = props
    return (
<<<<<<< HEAD
        <div>
            {!isLoggedIn ? <h1 style={styles.h1}>t a s k ' r</h1> : <h1>{quote}</h1>}
        </div>
=======
        <StyledRibbon>
            <h1 style={styles.h1}>t a s k ' r</h1>
        </StyledRibbon>
>>>>>>> 7169d56393682306b078a610f9a5656532c558ad
    )
}

export default Header
