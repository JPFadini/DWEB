function jogar(escolhaUsuario) {
    let escolhaPc;
    let num = Math.floor(Math.random() * 3); 

    if (num === 0) {
        escolhaPc = "pedra";
    } else if (num === 1) {
        escolhaPc = "papel";
    } else {
        escolhaPc = "tesoura";
    }

    let textoFinal = "";

    if (escolhaUsuario === escolhaPc) {
        textoFinal = "Empate!";
    } else if (escolhaUsuario === "pedra" && escolhaPc === "tesoura") {
        textoFinal = "Ganhaste! Pedra quebra tesoura.";
    } else if (escolhaUsuario === "tesoura" && escolhaPc === "papel") {
        textoFinal = "Ganhaste! Tesoura corta papel.";
    } else if (escolhaUsuario === "papel" && escolhaPc === "pedra") {
        textoFinal = "Ganhaste! Papel cobre a pedra.";
    } else if (escolhaPc === "pedra" && escolhaUsuario === "tesoura") {
        textoFinal = "O computador ganhou! Pedra quebra tesoura.";
    } else if (escolhaPc === "tesoura" && escolhaUsuario === "papel") {
        textoFinal = "O computador ganhou! Tesoura corta papel.";
    } else if (escolhaPc === "papel" && escolhaUsuario === "pedra") {
        textoFinal = "O computador ganhou! Papel cobre a pedra.";
    }

    document.getElementById("resultado").innerHTML = 
        "A tua escolha: <b>" + escolhaUsuario + "</b><br>" + 
        "Escolha do computador: <b>" + escolhaPc + "</b><br><br>" + 
        textoFinal;
}
        