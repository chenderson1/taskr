import React from 'react'

const AddBoard = props => {
    const { onChange } = props
    const styles = {
        tempStyle: {
            border: '1px solid black'
        }
    }
    return (
            //This is where you would be able to add a board
        <div style={styles.tempStyle}>
            <form>
                <input name='add board' placeholder='Please add board here' onChange={onChange}/>
            </form>
        </div>
    )
}

export default AddBoard
