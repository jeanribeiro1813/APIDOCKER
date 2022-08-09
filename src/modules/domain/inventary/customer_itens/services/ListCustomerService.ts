import { getCustomRepository } from 'typeorm';
import CustomerItemRepository from '../../../../data/typeorm/repository/CustomerItemRepository';
import CustomerItem from '../../../../data/typeorm/entities/CustomerItem';
import RedisCache from '../../../../../shared/cache/Redischace';

export default class ListInventaryService {
  public async list(): Promise<CustomerItem[] | undefined> {
    const repository = getCustomRepository(CustomerItemRepository);

    const result = await repository.findAll();

    const redisCache = new RedisCache();

    let customer = await redisCache.recover<CustomerItem[]>(
      'api-block-CUSTOMERITENS',
    );

    if (!customer) {
      customer = await repository.findAll();

      await redisCache.save('api-block-CUSTOMERITENS', customer);
    }
    return result;
  }
}
