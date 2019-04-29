import React from 'react'

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
        <div>
            <h1 style={styles.h1}>t a s k ' r</h1>
        </div>
    )
}

export default Header
