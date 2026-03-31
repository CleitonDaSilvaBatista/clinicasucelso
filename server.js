const express = require('express')
const path = require('path')

const app = express()

const pacientesRoutes = require('./routes/pacientes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// servir arquivos da pasta public
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cadastro.html'))
})

app.use(pacientesRoutes)

module.exports = app