import ler = require("readline-sync");
import { Stack } from "./stackMetodos";

const pilha = new Stack<string>();
let continua: string = " ";

do{

    console.log("****************Menu***********************");
    console.log             ("\n")
    console.log("      1 - Adicionar Livro na pilha         ");
    console.log("      2 - Listar todos os Livros           ");
    console.log("      3 - Retirar Livro da pilha           ");
    console.log("      0 - Sair                             ");
    console.log              ("\n")
    console.log("*******************************************");

    let opcao = ler.questionInt("Digite uma opcao -> ");

switch(opcao){
    case 1:
        pilha.push(ler.question("Digite o nome:"))
        console.log("Livro Adicionado!");
        break;  

    case 2:
        console.log("Lista:\n")
        pilha.printStack()
        console.log("\n")
        break;

    case 3:
        if(pilha.isEmpty() == true){
            console.log("A pilha está vazia!");
        }else{        
        pilha.pop()
        console.log("Pilha:\n")
        pilha.printStack()
        console.log("\nO livro foi removido!");
        }
        break;

    case 0:
        console.log("Programa finalizado!");
        process.exit()
    break;

    default:  
        console.log("Opção invalida!")

}
    continua = ler.question("Deseja continuar? (s/n): ");
    
}while (continua === "s");