const chatContent = document.getElementById('chat-content');
const chatBox = document.getElementById('chat-box');
const startButton = document.getElementById('start-button');
const sendButton = document.getElementById('send-button');
const userInput = document.getElementById('user-input');
const navLinks = document.getElementById('nav-links');

function showChat() {
    chatBox.style.display = 'block';
    startButton.style.display = 'none';
    userInput.style.display = 'block'; // Mostra o campo de entrada
    sendButton.style.display = 'block'; // Mostra o botão de envio
    chatContent.innerHTML = '';
    addMessage('Olá! Como posso ajudar você?');
    addButton('Abrir Cardápio', openMenu);
    addButton('Recomendar Comida', recommendFood);
    addButton('Curiosidades', showCuriosities);
}


function addMessage(message) {
    chatContent.innerHTML += `<p>${message}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight; // Rolagem automática
}

function addButton(label, callback) {
    const button = document.createElement('button');
    button.innerText = label;
    button.onclick = callback;
    chatContent.appendChild(button);
}

function openMenu() {
    addMessage('Aqui está o cardápio: <a href="cafes.html">Link do Cardápio</a>.');
    addButton('Voltar', showChat);
}

function recommendFood() {
    addMessage('Eu recomendo o Carollpucino, é uma delícia!');
    addButton('Voltar', showChat);
}

function showCuriosities() {
    addMessage('Sabia que o café preferido do LeBron é expresso?');
    addButton('Voltar', showChat);
}

function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        addMessage(`Você: ${message}`);
        // Aqui você pode adicionar lógica para respostas automáticas baseadas na mensagem do usuário
        userInput.value = ''; // Limpa o campo de entrada
    } else {
        addMessage('Por favor, digite uma mensagem antes de enviar.');
    }
    chatBox.scrollTop = chatBox.scrollHeight; // Rolagem automática
}

function toggleNavbar() {
    navLinks.classList.toggle('hidden');
}
