const mongoose = require('mongoose')
const Schema = mongoose.Schema

const boardSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: "Task"
        }
    ]
})

module.exports = mongoose.model("Board", boardSchema)