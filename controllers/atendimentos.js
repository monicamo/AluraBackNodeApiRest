module.exports = app => {
  app.get('/atendimentos', (req, res) => {
    res.send('Vc esta na rota de atendimentos!')
  })
}