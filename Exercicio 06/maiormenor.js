const prompt = require("prompt-sync")();

const num1 = parseFloat(prompt("Digite o primeiro número: "));
const num2 = parseFloat(prompt("Digite o segundo número: "));
const num3 = parseFloat(prompt("Digite o terceiro número: "));

const maior = Math.max(num1, num2, num3);
const menor = Math.min(num1, num2, num3);

console.log("O maior número é:", maior);
console.log("O menor número é:", menor);
