import leia = require("readline-sync");

const setNumeros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

console.log("Numeros cadastradas: ");

let linha = " "

for(let numero of setNumeros){
    linha += numero + " ";
}
{
    console.log(linha);
}

const numero1 = leia.questionInt("Digite um numero: ")
if (setNumeros.has(numero1)) {
console.log(`O numero ${numero1} foi encontrado`);
} else {
    console.log(`O numero ${numero1} nao foi encontrado`);
}