import Messages from '../entities/Messages';

export interface MessagesProtocols {
  findById(IdMessages: string): Promise<Messages | undefined>;
  findByIdRemetente(idRemetente: string): Promise<Messages | undefined>;
  findByIdDestinatario(IdDestinatário: string): Promise<Messages | undefined>;
  findAll(): Promise<Messages[] | undefined>;
}
