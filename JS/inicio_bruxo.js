function clicouBotao() {
    while (true) {
        var escolha = prompt("Escolha A \nEscolha B \nQual sua escolha?")
        if (escolha.toLowerCase() == "a") {
            console.log("Escolha correta!")
            part1.style.display = "none";
            part2_boa.style.display = "block";
            break;
        } else if (escolha.toLowerCase() == "b") {
            console.log("Escolha errada!")
            part1.style.display = "none";
            part2_ruim.style.display = "block";
            break;
        } else {
            alert("Insira uma opção válida")
        }
    }
