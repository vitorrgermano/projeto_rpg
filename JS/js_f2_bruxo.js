var escolha;

function pas_1() {
    while (true) {
        var escolha = prompt("Qual sua escolha?");
        if (escolha.toLowerCase() == "b") {
            part4_boa.style.display = "none";
            part5_boa.style.display = "block";
            break;
        } else if (escolha.toLowerCase() == "a" || escolha.toLowerCase() == "c") {
            part4_boa.style.display = "none";
            part7.style.display = "block";
            break;
        } else {
            alert("Insira uma opção válida")
        }
    }
}

function pas_2_1() {
    while (true) {
        var escolha = prompt("Qual sua escolha?");
        if (escolha.toLowerCase() == "b") {
            part4_boa.style.display = "none";
            part5_boa.style.display = "block";
            break;
        } else if (escolha.toLowerCase() == "a" || escolha.toLowerCase() == "c") {
            part4_boa.style.display = "none";
            part7.style.display = "block";
            break;
        } else {
            alert("Insira uma opção válida")
        }
    }
}

function pas_3_1() {
    while (true) {
        var escolha = prompt("Qual sua escolha?");
        if (escolha.toLowerCase() == "b") {
            part3_boa.style.display = "none";
            part4_boa.style.display = "block";
            break;
        } else if (escolha.toLowerCase() == "a" || escolha.toLowerCase() == "c") {
            part3_boa.style.display = "none";
            part7.style.display = "block";
            break;
        } else {
            alert("Insira uma opção válida")
        }
    }
}

function pas_4_1() {
    while (true) {
        var escolha = prompt("Qual sua escolha?");
        if (escolha.toLowerCase() == "b") {
            window.location.href = "../HTML/final.html" 
            break;
        } else if (escolha.toLowerCase() == "a" || escolha.toLowerCase() == "c") {
            part4_boa.style.display = "none";
            part7.style.display = "block";
            break;
        } else {
            alert("Insira uma opção válida")
        }
    }
}

function pas_7() {
            window.location.href = "../HTML/game_over.html" /* direcionar para GAME OVER */
}