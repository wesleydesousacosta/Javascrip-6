const prompt = require("prompt-sync")();

const N = parseInt(prompt("Digite um número N: "));

let a = 0, b = 1;

console.log("Sequência de Fibonacci:");

while (a <= N) {
    console.log(a);
    const next = a + b;
    a = b;
    b = next;
}
