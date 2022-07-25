import { io } from './http';

interface RootUser {
  socket_id: string;
  username: string;
}

interface Message {
  username: string;
  message: string;
}

const mensagem: Message[] = [];

const connecteUsers: string[] = [];

//Conexão Do Socket
io.on('connection', socket => {
  console.log('Conexão Socket Detectada com sucesso ....');

  // Entrada do Usuario pelo nome , e ele é colocado dentro de uma lista para exporta os nomes na sala
  socket.on('join-request', (username: string) => {
    socket.username = username;
    connecteUsers.push(username);
    console.log(connecteUsers);

    //Se o usuario tiver na sala ele vai mostrar a lista de usuario
    socket.emit('user-ok', connecteUsers);

    //Mostrando a lista para todos
    socket.broadcast.emit('list-update', {
      joined: username,
      list: connecteUsers,
    });
  });

  //Caso o usuario sair ele fara um update na lista e mostrar o usuario que saiu
  socket.on('disconnect', () => {
    connecteUsers = connecteUsers.filter(u => u != socket.username);
    console.log(connecteUsers);

    socket.broadcast.emit('list-update', {
      left: socket.username,
      list: connecteUsers,
    });
  });

  //Usuario e a Mensagem
  socket.on('message', txt => {
    const obj: Message = {
      username: socket.username,
      message: txt,
    };

    //Mostrando a mensagem para mim e para todos da sala , guardando as mensagens
    mensagem.push(obj);
    socket.emit('show-msg', obj);
    socket.broadcast.emit('show-msg', obj);
  });
});
