const express = require('express')
const index = require('./api/index')
const authentication = require('./api/authentication')

const app = express()

app.use('/', index)
app.use('/authentication', authentication)

module.exports = app