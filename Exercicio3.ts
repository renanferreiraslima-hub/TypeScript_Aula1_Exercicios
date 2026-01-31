import leia = require("readline-sync");

let numeros: number[] = [];

for (let i = 0; i <10; i++){
numeros.push(leia.questionInt(`Digite o ${i + 1} numero: `));
}

//Ordem numeral
numeros.sort((a, b) => (a-b));

//Usa set para remover os duplicados pois ele só não aceita elementos repetidos
let numerosUnicos = Array.from(new Set(numeros));


console.log("Dados listados: ")
for (let cor of numerosUnicos){
  console.log(cor)
}