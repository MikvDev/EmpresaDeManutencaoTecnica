import mysql from 'mysql2/promise';


try{
const connection = await mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'manutencaotecnico'
});
const sql = 'insert into `usuario`(`nome`,`email`,`senha`,`cpf`,`perfil`) values(?,?,?,?,?)`';
const values = ['Juan luin','luin@gmail.com','09876746','887564768763','Cliente']

const[results] = await connection.execute({
sql,
}, 
values
) ;
console.log(results);


}catch(err){
    console.log(err);
    console.log("Conexão falhou")
}
