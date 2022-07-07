import { getCustomRepository } from 'typeorm';
import InventaryItensRepository from '../../../../data/typeorm/repository/InventaryItensRepository';
import InventaryItens from '../../../../data/typeorm/entities/InventaryItens';

export default class ListInventaryService {
  public async list(): Promise<InventaryItens[] | undefined> {
    const repository = getCustomRepository(InventaryItensRepository);

    const result = await repository.findAll();

    return result;
  }
}
