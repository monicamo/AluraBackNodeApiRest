class Tabelas {
 // conn: any;

  init(conn) {
    //this.conn = conn;
    this.criarAtendimentos(conn);
    this.criarPets(conn);
  }

  criarAtendimentos(conn) {
    const sql = `CREATE TABLE IF NOT EXISTS Atendimentos (id int(11) NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, 
      pet varchar(20) DEFAULT NULL, servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, 
      status varchar(20) NOT NULL, observacoes text, PRIMARY KEY (id))`; 

    conn.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log('Tabela atendimentos criada com sucesso')
      }
    });
  }

  criarPets(conn) {
    const sql = `CREATE TABLE IF NOT EXISTS Pets (id int(11) NOT NULL AUTO_INCREMENT,
      nome varchar(50) DEFAULT NULL, imagem varchar(200) DEFAULT NULL,
      PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=utf8`;

    conn.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log('Tabela pets criada com sucesso')
      }

    })
  }
}

module.exports = new Tabelas