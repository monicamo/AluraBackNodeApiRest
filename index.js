const customExpress = require('./config/customExpress')
const conn = require('./infraestrutura/database/conexao')
const Tables = require('./infraestrutura/database/tabelas')


conn.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');

  Tables.init(conn);

  const app = customExpress()

  app.listen(3000, () => console.log('Servidor Node Rodando na Porta 3000'))

});

