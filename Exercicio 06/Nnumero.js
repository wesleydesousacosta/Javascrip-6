const prompt = require("prompt-sync")();

const N = parseInt(prompt("Digite um número N: "));

console.log(`Números primos menores que ${N}:`);

for (let i = 2; i < N; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}
