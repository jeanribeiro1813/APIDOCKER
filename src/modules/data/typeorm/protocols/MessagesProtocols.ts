import Messages from '../entities/Messages';

export interface MessagesProtocols {
  findById(IdMessages: string): Promise<Messages | undefined>;
  findBySala(Sala: string): Promise<Messages | undefined>;
  findByIdRemetente(IdRemetente: string): Promise<Messages | undefined>;
  findAll(): Promise<Messages[]>;
}
