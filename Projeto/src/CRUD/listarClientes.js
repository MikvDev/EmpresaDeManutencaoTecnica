
import mysql from 'mysql2/promise';



try{
const connection = await mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'manutencaotecnico'
});

const[results,fields] = await connection.execute(
    'Select * from  `usuario` '
) ;
console.log("Clientes Cadastrados:\n",results);

}catch(err){
    console.log(err);
    console.log("Conexão falhou")
}   
await conne


