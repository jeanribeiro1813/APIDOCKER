import { getCustomRepository } from 'typeorm';
import InventaryRepository from '../../../../data/typeorm/repository/InventaryRepository';
import Inventary from '../../../../data/typeorm/entities/Inventary';

export default class ListInventaryService {
  public async list(): Promise<Inventary[] | undefined> {
    const repository = getCustomRepository(InventaryRepository);

    const result = await repository.findAll();

    return result;
  }
}
