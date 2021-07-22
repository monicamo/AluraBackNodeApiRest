class Tabelas {

  init(conn) {
  //  this.conn = conn;
    this.criarAtendimentos(conn);
  }
//data datetime NOT NULL, dataCriacao datetime NOT NULL, 
  criarAtendimentos(conn) {
    const sql = `CREATE TABLE IF NOT EXISTS Atendimentos (id int(11) NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, 
      pet varchar(20) DEFAULT NULL, servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY (id)
      ) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8`;

      console.log(conn);

    conn.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log('Tabela atendimentos criada com sucesso')
      }
    });
  }
}

module.exports = new Tabelas