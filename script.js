// Obtendo os elementos
var popup = document.getElementById("popup");
var abrirPopup = document.getElementById("abrirPopup");
var fecharPopup = document.getElementById("fecharPopup");

// Abrir a janela pop-up quando o botão é clicado
abrirPopup.onclick = function() {
    popup.style.display = "block";
}

// Fechar a janela pop-up quando o "X" é clicado
fecharPopup.onclick = function() {
    popup.style.display = "none";
}

// Fechar a janela pop-up se o usuário clicar fora dela
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}
