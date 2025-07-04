import ler = require("readline-sync");
import { Queue } from "./queUeMetodos";

const fila = new Queue<string>();
let continua: string ="";

do{

    console.log("\n************Menu*******************\n");
    console.log("   1- Adicionar cliente na fila    ");
    console.log("   2- Listar todos os clientes     ");
    console.log("   3- Retirar Cliente da fila      ");
    console.log("   0- Sair                         ");
    console.log("\n***********************************\n");
    
    let opcao = ler.questionInt("Digite uma opcao -> ");

    switch(opcao){
        case 1:
            fila.enqueue(ler.question("Nome: "))
            console.log("\nCliente Adicionado!")
            break;

        case 2:
            console.log("\n Lista de Clientes na fila:\n")
            fila.printQueue();
            console.log("\n")
            break;
            
        case 3:
            fila.dequeue();
            console.log("\n");
            fila.printQueue();
            console.log("\nO cliente foi chamado");
            break;
           
        case 0:
            console.log("Programa finalizado!");
            process.exit()
            break;

        default:  
            console.log("Opção invalida!") 

    }
    
    continua = ler.question("Deseja continuar? (s/n): ".toLowerCase());

}while (continua === "s");
    