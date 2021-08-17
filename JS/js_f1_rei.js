var escolha;

function pas_1() {
    while (true) {
        escolha = prompt("Qual sua escolha?");
        if (escolha.toLowerCase() == "a" ) {
            part1.style.display = "none";
            part2_boa.style.display = "block";
            break;
        } else if (escolha.toLowerCase() == "b") {
            window.location.href = "../HTML/pagina_inicial.html" /* direcionar ao GAME OVER */
            break;
        } else {
            alert("Insira uma opção válida: 'A' ou 'B'.")
        }
    }
}

function pas_2() {
    while (true) {
        var escolha = prompt("Qual sua escolha?");
        if (escolha.toLowerCase() == "a" ) {
            part2_boa.style.display = "none";
            part3_boa.style.display = "block";
            break;
        } else if (escolha.toLowerCase() == "b") {
            part2_boa.style.display = "none";
            part3_outra.style.display = "block";
            break;
        } else if (escolha.toLowerCase() == "c") { 
            window.location.href = "../HTML/pagina_inicial.html" /* direcionar ao GAME OVER */
        } else {
            alert("Insira uma opção válida")
        }
    }
}

function pas_3_1() {
    while (true) {
        var escolha = prompt("Qual sua escolha?");
        if (escolha.toLowerCase() == "a" ) {
            part3_boa.style.display = "none";
            part4_boa.style.display = "block";
            break;
        } else if (escolha.toLowerCase() == "b") {
            part3_boa.style.display = "none";
            part4_outra.style.display = "block";
            break;
        } else if (escolha.toLowerCase() == "c") { 
            window.location.href = "../HTML/pagina_inicial.html" /* direcionar ao GAME OVER */
        } else {
            alert("Insira uma opção válida")
        }
    }
}

function pas_3_2() {
    while (true) {
        var escolha = prompt("Qual sua escolha?");
        if (escolha.toLowerCase() == "a" ) {
            part3_outra.style.display = "none";
            part4_boa.style.display = "block";
            break;
        } else if (escolha.toLowerCase() == "b") {
            part3_outra.style.display = "none";
            part4_outra.style.display = "block";
            break;
        } else if (escolha.toLowerCase() == "c") { 
            window.location.href = "../HTML/pagina_inicial.html" /* direcionar ao GAME OVER */
        } else {
            alert("Insira uma opção válida")
        }
    }
}

function pas_4_1() {
    while (true) {
        var escolha = prompt("Qual sua escolha?");
        if (escolha.toLowerCase() == "a" ) {
            part4_boa.style.display = "none";
            part5_boa.style.display = "block";
            break;
        } else if (escolha.toLowerCase() == "b") {
            part4_boa.style.display = "none";
            part5_outra.style.display = "block";
            break;
        } else if (escolha.toLowerCase() == "c") { 
            window.location.href = "../HTML/pagina_inicial.html" /* direcionar ao GAME OVER */
        } else {
            alert("Insira uma opção válida")
        }
    }
}

function pas_4_2() {
    while (true) {
        var escolha = prompt("Qual sua escolha?");
        if (escolha.toLowerCase() == "a" ) {
            part4_outra.style.display = "none";
            part5_boa.style.display = "block";
            break;
        } else if (escolha.toLowerCase() == "b") {
            part4_outra.style.display = "none";
            part5_outra.style.display = "block";
            break;
        } else if (escolha.toLowerCase() == "c") { 
            window.location.href = "../HTML/pagina_inicial.html" /* direcionar ao GAME OVER */
        } else {
            alert("Insira uma opção válida")
        }
    }
}

function pas_5_1() {
    while (true) {
        var escolha = prompt("Qual sua escolha?");
        if (escolha.toLowerCase() == "a" ) {
            part5_boa.style.display = "none";
            part6_boa.style.display = "block";
            break;
        } else if (escolha.toLowerCase() == "b") {
            part5_boa.style.display = "none";
            part6_outra.style.display = "block";
            break;
        } else if (escolha.toLowerCase() == "c") { 
            window.location.href = "../HTML/pagina_inicial.html" /* direcionar ao GAME OVER */
        } else {
            alert("Insira uma opção válida")
        }
    }
}

function pas_5_2() {
    while (true) {
        var escolha = prompt("Qual sua escolha?");
        if (escolha.toLowerCase() == "a" ) {
            part5_outra.style.display = "none";
            part6_boa.style.display = "block";
            break;
        } else if (escolha.toLowerCase() == "b") {
            part5_outra.style.display = "none";
            part6_outra.style.display = "block";
            break;
        } else if (escolha.toLowerCase() == "c") { 
            window.location.href = "../HTML/pagina_inicial.html" /* direcionar ao GAME OVER */
        } else {
            alert("Insira uma opção válida")
        }
    }
}

function pas_6_1() {
    while (true) {
        var escolha = prompt("Qual sua escolha?");
        if (escolha.toLowerCase() == "a" ) {
            window.location.href = "../HTML/f2_rei.html" /* direcionar para FASE 2 */
            break;
        } else if (escolha.toLowerCase() == "b" || escolha.toLowerCase() == "c") {
            part6_boa.style.display = "none";
            part7_outra.style.display = "block";
            break;
        } else {
            alert("Insira uma opção válida")
        }
    }
}

function pas_6_2() {
    while (true) {
        var escolha = prompt("Qual sua escolha?");
        if (escolha.toLowerCase() == "a" ) {
            window.location.href = "../HTML/f2_rei.html" /* direcionar para FASE 2 */
            break;
        } else if (escolha.toLowerCase() == "b" || escolha.toLowerCase() == "c") {
            part6_outra.style.display = "none";
            part7_outra.style.display = "block";
            break;
        } else {
            alert("Insira uma opção válida")
        }
    }
}

function pas_7() {
            window.location.href = "../HTML/pagina_inicial.html" /* direcionar para GAME OVER */
}