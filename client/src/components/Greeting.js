import React from 'react'
import taskr from '../resources/taskr.png'

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
            <br></br><br></br>
            <div style={styles.greetingDiv}>
                Welcome! <br></br> Meet task'r, the task-eating taskosaurus-rex. <br></br>
                He needs your help, task'r is very hungry - complete tasks so he can eat!
            </div>
        </div>
    )
}

export default Greeting
