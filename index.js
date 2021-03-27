const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const businessRouter = require('./routes/business-router')

const app = express()
const apiPort = 5000 || process.env.PORT

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', businessRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))