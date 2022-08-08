import { Repository, EntityRepository } from 'typeorm';
import Messages from '../entities/Messages';
import { MessagesProtocols } from '../protocols/MessagesProtocols';

@EntityRepository(Messages)
export default class MessagesRepository
  extends Repository<Messages>
  implements MessagesProtocols
{
  findByIdRemetente(IdRemetente: string): Promise<Messages | undefined> {
    const index = this.findOne({ where: { IdRemetente } });

    return index;
  }
  findBySala(Sala: string): Promise<Messages | undefined> {
    const index = this.findOne({ where: { Sala } });

    return index;
  }

  public async findById(IdMessages: string): Promise<Messages | undefined> {
    const index = this.findOne({ where: { IdMessages } });

    return index;
  }

  public async findAll(): Promise<Messages[]> {
    const all = this.find({});

    return all;
  }
}
