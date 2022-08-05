import { getCustomRepository } from 'typeorm';
import FriendsRepository from '../../../data/typeorm/repository/FriendsRepository';
import Friends from '../../../data/typeorm/entities/Friends';

export default class ListInventaryService {
  public async list(): Promise<Friends[] | undefined> {
    const repository = getCustomRepository(FriendsRepository);

    const result = await repository.findAll();

    return result;
  }
}
