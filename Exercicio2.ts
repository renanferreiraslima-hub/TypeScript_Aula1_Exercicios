import leia = require("readline-sync");

const numeros: Array<number> = new Array<number>();


numeros.push(2,5,1,3,4,9,7,8,10,6);
let linha = ""

for(let numero of numeros){
    linha += numero + ", ";
}
    console.log(linha)




const numero1 = leia.questionInt("Digite um numero: ");

const posicao = numeros.indexOf(numero1);
    if (posicao === -1) {
        console.log(`O numero ${numero1} não foi encontrado!`)
    } else {
        console.log(`O numero ${numero1} está localizado na posicao: ` + (posicao));
    }


//console.log("\nA posição do numero digitado é: " + numeros.indexOf(posicao));