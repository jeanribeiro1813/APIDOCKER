import { io } from './http';

io.on('connection', socket => {
  console.log('Conexão Socket Detectada com sucesso ....');
});
