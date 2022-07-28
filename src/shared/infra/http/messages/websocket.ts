import { io } from '../http';
import { Response, Request } from 'express';
import CreateMessagesService from '../../../../modules/domain/messages/services/CreateMessagesService';

interface RoomUser {
  socket_id: string;
  username: string;
  room: string;
}

interface Message {
  Sala: string;
  messages: string;
  IdRemetente: string;
}

const users: RoomUser[] = [];
const messages: Message[] = [];

io.on('connection', socket => {
  socket.on('select_room', (data, callback) => {
    socket.join(data.room);

    const userInRoom = users.find(
      user => user.username === data.username && user.room === data.room,
    );

    if (userInRoom) {
      userInRoom.socket_id = socket.id;
    } else {
      users.push({
        room: data.room,
        username: data.username,
        socket_id: socket.id,
      });
    }

    const messagesRoom = getMessagesRoom(data.Sala);
    callback(messagesRoom);
  });

  socket.on('message', async (data, res: Response, req: Request) => {
    const message: Message = {
      Sala: data.room,
      IdRemetente: data.username,
      messages: data.message,
    };

    const result = new CreateMessagesService();

    const criado = await result.criar(message);

    console.log(criado);

    // messages.push(message);

    io.to(data.room).emit('message', message);
  });
});

function getMessagesRoom(room: string) {
  const messagesRoom = messages.filter(message => message.Sala === room);
  return messagesRoom;
}
