const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://admin:Carnegie123@cluster0.3alac.mongodb.net/business?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db;