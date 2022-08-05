import { getCustomRepository } from 'typeorm';
import CustomerItemRepository from '../../../../data/typeorm/repository/CustomerItemRepository';
import CustomerItem from '../../../../data/typeorm/entities/CustomerItem';

export default class ListInventaryService {
  public async list(): Promise<CustomerItem[] | undefined> {
    const repository = getCustomRepository(CustomerItemRepository);

    const result = await repository.findAll();

    return result;
  }
}
