const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://anushka:522gpmztKf8aApY@cluster0.vcv8d.mongodb.net/user?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db;