import { serverHttp } from '../http';
import { io } from '../http';

io.on('connection', socket => {
  console.log('Entrou WEBSOCKET PARA TEMPO 8050');
});
