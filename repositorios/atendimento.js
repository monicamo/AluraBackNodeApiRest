const query = require('../infraestrutura/database/queries');

class AtendimentoRepository {

  adiciona(atendimento) {
    const sql = 'INSERT INTO Atendimentos SET ?';
    return query(sql, atendimento);
  }
}

module.exports = new AtendimentoRepository()