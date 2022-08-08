import { serverHttp } from './http';
import './messages/websocket';

serverHttp.listen(3225, () => {
  console.log('Entrou no servidor 3225');
});
