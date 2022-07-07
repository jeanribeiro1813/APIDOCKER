import { getCustomRepository } from 'typeorm';
import CoinItemRepository from '../../../../data/typeorm/repository/CoinItemRepository';
import CoinItem from '../../../../data/typeorm/entities/CoinItem';

export default class ListInventaryService {
  public async list(): Promise<CoinItem[] | undefined> {
    const repository = getCustomRepository(CoinItemRepository);

    const result = await repository.findAll();

    return result;
  }
}
