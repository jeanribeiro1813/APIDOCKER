import { Repository, EntityRepository } from 'typeorm';
import Messages from '../entities/Messages';
import { MessagesProtocols } from '../protocols/MessagesProtocols';

@EntityRepository(Messages)
export default class MessagesRepository
  extends Repository<Messages>
  implements MessagesProtocols
{
  findByIdRemetente(idRemetente: string): Promise<Messages | undefined> {
    const index = this.findOne({ where: { idRemetente } });

    return index;
  }
  findByIdDestinatario(IdDestinatário: string): Promise<Messages | undefined> {
    const index = this.findOne({ where: { IdDestinatário } });

    return index;
  }

  public async findById(IdMessages: string): Promise<Messages | undefined> {
    const index = this.findOne({ where: { IdMessages } });

    return index;
  }

  public async findAll(): Promise<Messages[] | undefined> {
    const all = this.find({});

    return all;
  }
}
