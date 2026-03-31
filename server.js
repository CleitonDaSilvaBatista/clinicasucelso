const express = require('express')
const app = express()

const pacientesRoutes = require('./routes/pacientes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(pacientesRoutes)

module.exports = app