//Visualizaçao de senha
function toggleSenhaVisibility() {
    var senhaInput = document.getElementById('senha');
    var toggleIcon = document.getElementById('togglePassword');

    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        toggleIcon.textContent = "👁️";
    } else {
        senhaInput.type = "password";
        toggleIcon.textContent = "👁️";
    }
}

//Central de agendamento
// Obtendo os elementos
var popup = document.getElementById("popup");
var abrirPopup = document.getElementById("abrirPopup");
var fecharPopup = document.getElementById("fecharPopup");

// Abrir a janela pop-up quando o botão é clicado
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('abrirPopup')) {
        popup.style.display = "block";
    }
});

fecharPopup.onclick = function() {
    popup.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
};





//login provisório
function fazerLogin() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;


    // Verificação de email e senha
    if (email === 'admin@agenda.com' && senha === '123456') {
        window.location.href = 'central.html';
        return false; 
    } 
    else {
        var errorMessage = document.getElementById('errorMessage');
        errorMessage.innerHTML = 'E-mail ou senha incorretos.';
        return false; // Para evitar que o formulário seja enviado
    }
}

clienteJson.map((item, index) => {
    
    let clienteItem = document.querySelector('.models').cloneNode(true)
    clienteItem.style.display = "";
   
    document.querySelector('.cliente-area').append(clienteItem)

    //preencher os dados
    clienteItem.querySelector('.datacorte').innerHTML = item.date
    clienteItem.querySelector('.nomecliente').innerHTML = item.name
    clienteItem.querySelector('.tiposerv').innerHTML = item.typeservice
    clienteItem.querySelector('.preco').innerHTML = item.price

});