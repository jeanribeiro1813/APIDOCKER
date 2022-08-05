import { getCustomRepository } from 'typeorm';
import BillboardFeedRepository from '../../../../data/typeorm/repository/BillboardFeedRepository';
import BillboardFeed from '../../../../data/typeorm/entities/BillboardFeed';

export default class ListInventaryService {
  public async list(): Promise<BillboardFeed[] | undefined> {
    const repository = getCustomRepository(BillboardFeedRepository);

    const result = await repository.findAll();

    return result;
  }
}
