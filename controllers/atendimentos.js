const Atendimentos = require('../models/atendimento')

module.exports = app => {
  app.get('/atendimentos', (req, res) => {
    res.send('Vc esta na rota de atendimentos, esta fazendo um GET!')
  })

  app.post('/atendimentos', (req, res) => {
    const atendimento = req.body;
    Atendimentos.adiciona(atendimento);
    res.send('Vc esta na rota de atendimentos, esta fazendo um POST!')
  })
}