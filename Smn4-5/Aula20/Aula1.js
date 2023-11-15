
document.getElementById("btnClick").onclick = function() {
    alert("Botão Clicado!")
}

document.getElementById("inputText").onchange = function() {
    this.style.color = "red";
}

document.getElementById("inputText").oninput = function() {
    this.style.color = "green";
}

document.getElementById("inputText").onkeydown = function() {
    document.getElementById("outputMessage").innerText = "Tecla Pressionada";
}

document.getElementById("inputText").onkeypress = function() {
    document.getElementById("outputMessage").innerText = "Teclado Sendo Pressionado";
}

document.getElementById("inputText").onkeyup = function() {
    document.getElementById("outputMessage").innerText = "Tecla Liberada";
}

var box = document.getElementById("box");
box.onmouseover = function() {
    this.style.background = "red";
}

box.onmouseout = function() {
    this.style.background = "#00c8a8";
}

box.ondragstart = function(event) {
    event.dataTransfer.setData("text/plain", "Gustavo Leripio")
}

box.ondragover = function(event) {
    event.preventDefault();
}

box.ondrop = function(event) {
    event.preventDefault();
    var data =  event.dataTransfer.getData("text/plain");
    box.innerText = data;
}

window.onload = function() { 
    alert("Pagina completamente carregada!");
}

var btnChallenge = document.getElementById("btnChallenge");
var clickCounter = 0;

btnChallenge.onclick = function() {
    clickCounter++;
    document.getElementById("count").innerText = clickCounter;
}

setTimeout(function(){
    alert("Tempo esgotado! Voce clicou" +clickCounter+ " Vezes.")
}, 10000);