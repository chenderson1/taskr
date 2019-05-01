import React from 'react'
import taskr from '../../resources/taskr.png'
import WhyTaskr from './WhyTaskr'

const Greeting = () => {
    const styles = {
        img: {
            height: '100px',
            margin: '10px'
        },
        greetingDiv: {
            padding: '10px',
            margin: '10px'
        }
    }
    return (
        <div>
            <img src={taskr} alt="dinosaur icon" style={styles.img}/>
            
            <div style={styles.greetingDiv}>
                Welcome! <br></br> Meet task'r, the taskosaurus-rex. <br></br>
                He needs your help, task'r is very hungry - complete tasks so he can eat!
            </div>
            <br></br><br></br>
            <br></br><br></br>
            <WhyTaskr />
        </div>
    )
}

export default Greeting
