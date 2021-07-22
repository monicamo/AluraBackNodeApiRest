const conn = require('../infraestrutura/conexao')

class Atendimento {
  adiciona(atendimento) {
    const sql = 'INSERT INTO Atendimentos SET ?'

    conn.query(sql, atendimento, (erro, resultados) => {
      if (erro) {
        console.log(erro)
      } else {
        console.log(resultados)
      }
    })
  }
}

module.exports = new Atendimento