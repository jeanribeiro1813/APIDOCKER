import { getCustomRepository } from 'typeorm';
import BillboardRepository from '../../../../data/typeorm/repository/BillboardRepository';
import Billboard from '../../../../data/typeorm/entities/Billboard';

export default class ListInventaryService {
  public async list(): Promise<Billboard[] | undefined> {
    const repository = getCustomRepository(BillboardRepository);

    const result = await repository.findAll();

    return result;
  }
}
