while (true) {
    var escolha = prompt("Escolha A<br> Escolha B<br> Qual sua escolha?")
    if (escolha.toLowerCase() == "a") {
        document.write("Escolha correta!")
        break;
    } else if (escolha.toLowerCase() == "b") {
        document.write("Escolha errada!")
        break;
    } else {
        alert("Insira uma opção válida")
    }
}