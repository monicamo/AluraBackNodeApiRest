const customExpress = require('./config/customExpress')
const conn = require('./infraestrutura/conexao')

const app = customExpress()

conn.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

app.listen(3000, () => console.log('Servidor Node Rodando na Porta 3000'))