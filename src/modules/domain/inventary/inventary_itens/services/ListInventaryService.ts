<<<<<<< HEAD
import { getCustomRepository } from 'typeorm';
import InventaryItensRepository from '../../../../data/typeorm/repository/InventaryItensRepository';
import InventaryItens from '../../../../data/typeorm/entities/InventaryItens';
import RedisCache from '../../../../../shared/cache/Redischace';

export default class ListInventaryService {
  public async list(): Promise<InventaryItens[] | undefined> {
    const repository = getCustomRepository(InventaryItensRepository);

    const result = await repository.findAll();

    const redisCache = new RedisCache();

    let inventary = await redisCache.recover<InventaryItens[]>(
      'api-block-INVENTARYITENS',
    );

    if (!inventary) {
      inventary = await repository.findAll();

      await redisCache.save('api-block-INVENTARYITENS', inventary);
    }

    return result;
  }
}
=======
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
>>>>>>> develop
