const express = require('express')
const router = express.Router()
const supabase = require('../database')

router.post('/pacientes', async (req, res) => {

const { nome, celular, email } = req.body

await supabase
.from('pacientes')
.insert([{ nome, celular, email }])

res.send("Paciente cadastrado com sucesso")

})

module.exports = router