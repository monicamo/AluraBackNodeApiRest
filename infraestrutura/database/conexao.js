const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 8889,
  user: 'root',
  password: 'root',
  database: 'agenda-petshop'
});

module.exports = connection

