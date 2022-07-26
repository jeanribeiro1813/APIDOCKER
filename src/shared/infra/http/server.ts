import { serverHttp } from './http';
import './socket/websocket';

serverHttp.listen(3225, () => {
  console.log('Entrou no servidor 3225');
});
