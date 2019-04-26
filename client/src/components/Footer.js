import React from 'react'
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
        <div style={styles.div}>
            <img src={taskr} alt="dinosaur icon" style={styles.img}/>
        </div>
    )
}

export default Footer
