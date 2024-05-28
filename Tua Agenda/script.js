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

document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const fecharPopup = document.getElementById('fecharPopup');
    const enviarCancel = document.getElementById('EnviarCancel');
    const motivoInput = popup.querySelector('input[type="text"]');
    let linhaParaRemover = null;

    // Função para abrir o popup
    function abrirPopup(linha) {
        linhaParaRemover = linha;
        popup.style.display = 'block';
    }

    // Fechar popup quando clicar no botão de fechar
    fecharPopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Fechar popup quando clicar fora do conteúdo do popup
    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });

    // Remover linha da tabela quando clicar no botão "Enviar" no popup, se o campo de texto estiver preenchido
    enviarCancel.addEventListener('click', () => {
        if (motivoInput.value.trim() === '') {
            alert('Por favor, insira um motivo para o cancelamento.');
        } else {
            if (linhaParaRemover) {
                linhaParaRemover.remove();
                popup.style.display = 'none';
                motivoInput.value = ''; // Limpar o campo de texto após a remoção
            }
        }
    });

    // Adiciona evento ao botão "Remover" para abrir o popup
    document.querySelectorAll('.abrirPopup').forEach(botao => {
        botao.addEventListener('click', function() {
            const linha = this.closest('tr');
            abrirPopup(linha);
        });
    });
});





//login provisório
function fazerLogin() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;


    // Verificação de email e senha
    if (email === 'admin@agenda.com' && senha === '123456') {
        window.location.href = 'landing_page.html';
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
    clienteItem.querySelector('.preco').innerHTML = `R$ ${item.price.toFixed(2)}`

});