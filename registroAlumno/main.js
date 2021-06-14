const express = require('express')
const app = express()

app.use(bodyParser.json())

app.use('/api/Orders',orders)
app.use('/api/User',users) 

module.exports = app