// Simulação de entrada de dados para 45 pessoas
// Cada item do array armazena: [idade, sexo ('F', 'M', 'O'), opiniao (4=ótimo, 3=bom, 2=regular, 1=péssimo)]
const totalPessoas = 45;
const respostas = [];

for (let i = 0; i < totalPessoas; i++) {
    let idade = Math.floor(Math.random() * 65) + 15;
    let sexos = ['F', 'M', 'O'];
    let sexo = sexos[Math.floor(Math.random() * sexos.length)];
    let opiniao = Math.floor(Math.random() * 4) + 1;
    respostas.push({ idade, sexo, opiniao });
}

let somaIdades = 0;
let idadeMaisVelha = respostas[0].idade;
let idadeMaisNova = respostas[0].idade;
let qtdPessimo = 0;
let qtdOtimoBom = 0;
let qtdMulheres = 0;
let qtdHomens = 0;
let qtdOutros = 0;

for (let i = 0; i < respostas.length; i++) {
    let p = respostas[i];

    somaIdades += p.idade;

    if (p.idade > idadeMaisVelha) idadeMaisVelha = p.idade;
    if (p.idade < idadeMaisNova) idadeMaisNova = p.idade;

    if (p.opiniao === 1) {
        qtdPessimo++;
    }

    if (p.opiniao === 4 || p.opiniao === 3) {
        qtdOtimoBom++;
    }

    if (p.sexo === 'F') qtdMulheres++;
    else if (p.sexo === 'M') qtdHomens++;
    else if (p.sexo === 'O') qtdOutros++;
}

let mediaIdade = somaIdades / totalPessoas;
let porcentagemOtimoBom = (qtdOtimoBom / totalPessoas) * 100;

console.log("--- RESULTADOS DA PESQUISA ---");
console.log(`Média da idade das pessoas: ${mediaIdade.toFixed(2)} anos`);
console.log(`Idade da pessoa mais velha: ${idadeMaisVelha} anos`);
console.log(`Idade da pessoa mais nova: ${idadeMaisNova} anos`);
console.log(`Quantidade de pessoas que responderam péssimo: ${qtdPessimo}`);
console.log(`Porcentagem de pessoas que responderam ótimo e bom: ${porcentagemOtimoBom.toFixed(2)}%`);
console.log(`Número de mulheres: ${qtdMulheres}`);
console.log(`Número de homens: ${qtdHomens}`);
console.log(`Número de outros: ${qtdOutros}`);
