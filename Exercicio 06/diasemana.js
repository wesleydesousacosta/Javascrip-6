const prompt = require("prompt-sync")();

const dia = prompt("Digite o nome de um dia da semana: ").toLowerCase();

const tipoDia = ["segunda", "terça", "terca", "quarta", "quinta", "sexta"].includes(dia) 
    ? "um dia útil" 
    : ["sábado", "sabado", "domingo"].includes(dia) 
    ? "um dia de fim de semana" 
    : "inválido";

console.log(`Você digitou ${dia}, que é ${tipoDia}.`);
