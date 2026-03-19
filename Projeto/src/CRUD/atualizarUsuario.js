try {
    const connection = await mysql.createConnection({
    
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'manutencaotecnico'
    });
    
  const sql = 'UPDATE `usuario` SET `nome,email,senha, cpf, perfil` = ? WHERE `idUsuario` = ? ';
  const values = ['','','','','', 12];

  const [result, fields] = await connection.execute(sql, values);

  console.log(result);
  console.log(fields);
} catch (err) {
  console.log(err);
}