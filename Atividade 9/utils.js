function maiorDeTres(a, b, c) {
    return Math.max(a, b, c);
}

function ordenarTresNumeros(a, b, c) {
    return [a, b, c].sort((x, y) => x - y);
}

function verificarPalindromo(texto) {
    if (typeof texto !== 'string') return false;
    const limpa = texto.toLowerCase().replace(/\s+/g, '');
    const reverso = limpa.split('').reverse().join('');
    return limpa === reverso;
}

function verificarSubconjunto(palavra1, palavra2) {
    if (!palavra1 || !palavra2 || palavra1.trim() === "" || palavra2.trim() === "") {
        return "erro";
    }
    const p1 = palavra1.toLowerCase();
    const p2 = palavra2.toLowerCase();

    if (p1.includes(p2) || p2.includes(p1)) {
        return "é um subconjunto";
    } else {
        return "não é um subconjunto";
    }
}

function obterDiaDaSemana(dataInput) {
    const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const data = new Date(dataInput);
    
    if (isNaN(data.getTime())) {
        return "Data inválida";
    }
    
    return dias[data.getUTCDay()];
}

export {
    maiorDeTres,
    ordenarTresNumeros,
    verificarPalindromo,
    verificarSubconjunto,
    obterDiaDaSemana
};
