import { getCustomRepository } from 'typeorm';
import MessagesRepository from '../../../data/typeorm/repository/MessagesRepository';
import Messages from '../../../data/typeorm/entities/Messages';

export default class ListInventaryService {
  public async list(): Promise<Messages[] | undefined> {
    const repository = getCustomRepository(MessagesRepository);

    const result = await repository.findAll();

    return result;
  }
}
