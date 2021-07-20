const express = require('express')

const app = express();

app.listen(3000, () => {
  console.log('Servidor Node Rodando na Porta 3000')
})

app.get('/atendimentos', (req, res) => {
  res.send('Vc esta na rota de atendimentos!')
})