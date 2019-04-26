const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    title: String,
    description: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    board: {
        type: Schema.Types.ObjectId,
        ref: "Board"
    },
})

module.exports = mongoose.model("Task", taskSchema)