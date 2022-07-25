/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const socket = io(); // Posso colocar a porta que eu quiser aqui

let username = '';
let userList = [];

let loginPage = document.querySelector('#loginPage');

let chatPage = document.querySelector('#chatPage');

let loginInput = document.querySelector('#loginNameInput');

let textInput = document.querySelector('#chatTextInput');

loginPage.style.display = 'flex';

chatPage.style.display = 'none';

//Renderizando lista de usuarios
function renderUserList() {
  let ul = document.querySelector('.userList');
  ul.innerHTML = '';

  userList.forEach(i => {
    ul.innerHTML += '<li>' + i + '</li>';
  });
}

//Função de mensagem para enviar e receber
function addMessage(type, user, msg) {
  let ul = document.querySelector('.chatList');

  switch (type) {
    case 'status':
      ul.innerHTML += '<li class="m-status">' + msg + '</li>';
      break;
    case 'msg':
      ul.innerHTML +=
        '<li class="m-txt"><span>' + user + '</span>' + msg + '</li>';
      break;
  }
}

//Entrando na pagina inicial com o nome
loginInput.addEventListener('keyup', e => {
  if (e.keyCode === 13) {
    let name = loginInput.value.trim();

    if (name != '') {
      username = name;
      document.title = 'Chat (' + username + ')';

      socket.emit('join-request', username);
    }
  }
});

//Envio da mensagem e emitindo para o povo
textInput.addEventListener('keyup', e => {
  if (e.keyCode === 13) {
    let txt = textInput.value.trim();
    textInput.value = '';

    if (txt != '') {
      socket.emit('message', txt);
    }
  }
});

//Usuario ok esta no chat e recebe mensagem de conectado
socket.on('user-ok', list => {
  loginPage.style.display = 'none';
  chatPage.style.display = 'flex';
  textInput.focus();

  addMessage('status', null, 'connected');

  userList = list;
  renderUserList();
});

//Fazendo update na lista que apresenta ao lado , é aqui mostra quem entrou e quem saiu
socket.on('list-update', data => {
  if (data.joined) {
    addMessage('status', null, data.joined + ' Entrou no chat');
  }

  if (data.left) {
    addMessage('status', null, data.left + ' Saiu do chat');
  }
  userList = data.list;
  renderUserList();
});

//Mensagem enviada
socket.on('show-msg', data => {
  addMessage('msg', data.username, data.message);
});

//Mensagem de desconectado
socket.on('disconnect', data => {
  addMessage('msg', null, 'Você foi desconectado');
  userList = [];
  renderUserList();
});

//Mensagem de Reconnectando dando erro, caso o servidor cair ou a internet do cara
socket.on('reconnect_error', data => {
  addMessage('msg', null, 'Tentando reconectar');
});

socket.on('recconect', data => {
  addMessage('status', null, 'Reconectado');

  if (username != '') {
    socket.emit('join-request', username);
  }
});
