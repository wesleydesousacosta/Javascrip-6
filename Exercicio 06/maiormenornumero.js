const prompt = require("prompt-sync")();

let num;
let maior = null;
let menor = null;

do {
    num = parseFloat(prompt("Digite um número (ou 0 para finalizar): "));

    if (num !== 0) {
        if (maior === null || num > maior) {
            maior = num;
        }
        if (menor === null || num < menor) {
            menor = num;
        }
    }
} while (num !== 0);

if (maior !== null && menor !== null) {
    console.log("O maior número é:", maior);
    console.log("O menor número é:", menor);
} else {
    console.log("Nenhum número foi inserido.");
}
