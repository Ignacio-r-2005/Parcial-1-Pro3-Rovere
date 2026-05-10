//Segundo paso
const mysql = require('mysql2');

const conexion = mysql.createConnection({
  host:     'localhost',
  port: 3306,  // 
  user:     'root',
  password: '',
  database: 'mi_juegos'
});

conexion.connect((err) => {
  if (err) throw err;
  console.log('Conectado a MySQL');
});

module.exports = conexion;