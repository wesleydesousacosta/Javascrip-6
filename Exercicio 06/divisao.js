const prompt = require("prompt-sync")()

const numero = parseInt(prompt('Digite um número inteiro: '), 10);

if (numero % 3 === 0 && numero % 5 === 0) {
    console.log(`O número ${numero} é divisível por 3 e por 5.`);
} else {
    console.log(`O número ${numero} não é divisível por 3 e por 5.`);
}
