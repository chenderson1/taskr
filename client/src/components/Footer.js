import React from 'react'
import { StyledRibbon } from '../elements/index'
import taskr from '../resources/taskr.png'


const Footer = () => {
    const styles = {
        div: {
            margin: '20px',
        },
        img: {
            height: '25px',
            width: '25px'
        }
    }
    return (
        <StyledRibbon>
            <img src={taskr} alt="dinosaur icon" style={styles.img}/>
        </StyledRibbon>
    )
}

export default Footer
