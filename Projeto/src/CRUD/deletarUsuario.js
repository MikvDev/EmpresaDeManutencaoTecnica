import mysql from 'mysql2/promise';


try {
const connection = await mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'manutencaotecnico'
});


  const sql = 'DELETE FROM `usuario` WHERE `idUsuario` = ?';
  const values = ['11'];

  const [result, fields] = await connection.execute(sql, values);

  console.log(result);
  console.log(fields);
} catch (err) {
  console.log(err);
}