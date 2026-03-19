
var readlineSync = require('readline-sync')



export function menu(){
    console.log("======  Bem Vindo ======")
    console.log("                        ")
    console.log("      Se cadastre!      ")
    console.log("1. Cadastro de usuário  ")
    console.log("                        ")
    console.log("2. Agendar manutenção  ")
    let op = parseInt(readlineSync.question("Digite uma opção: "));

    while(op != 3){
        if(op == 1){
            // Cadastrar  usuário no banco
            console.log("")
            return;
        }
        else if(op == 2){
            // cadastrar produto
            console.log("")
            return;

        }else{
            console.log("Opção invalida")
        }
    }





}