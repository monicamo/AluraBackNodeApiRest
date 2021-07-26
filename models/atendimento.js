const moment = require('moment')
const conn = require('../infraestrutura/conexao')

class Atendimento {
  adiciona(atendimento, res) {
    const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
    const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
    const atendimentoDatado = { ...atendimento, dataCriacao, data };

    const sql = 'INSERT INTO Atendimentos SET ?'

    conn.query(sql, atendimentoDatado, (erro, resultados) => {
      if (erro) {
        console.log(erro)
        res.status(400).json(erro);
      } else {
        console.log(resultados)
        res.status(201).json(resultados)
      }
    })
  }
}

module.exports = new Atendimento