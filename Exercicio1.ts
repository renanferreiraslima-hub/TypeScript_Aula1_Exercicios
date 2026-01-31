import leia = require("readline-sync");

let cores: string[] = [];

for (let i = 0; i <5; i++){
cores.push(leia.question(`Digite a ${i + 1} cor: `));
}
console.log("Listar todas as cores:",)
for (let cor of cores){
  console.log(cor)
}

cores.sort();

console.log("Cores ordenadas:")
for (let cor of cores){
  console.log(cor)
}
//console.table(cores);

