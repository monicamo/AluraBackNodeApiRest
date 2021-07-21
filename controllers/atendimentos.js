module.exports = app => {
  app.get('/atendimentos', (req, res) => {
    res.send('Vc esta na rota de atendimentos, esta fazendo um GET!')
  })

  app.post('/atendimentos', (req, res) => {
    res.send('Vc esta na rota de atendimentos, esta fazendo um POST!')
  })
}