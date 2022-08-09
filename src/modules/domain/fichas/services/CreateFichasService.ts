import { getCustomRepository } from 'typeorm';
import FichasRepository from '../../../data/typeorm/repository/FichasRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';
import Fichas from '../../../data/typeorm/entities/Fichas';
import RedisCache from '../../../../shared/cache/Redischace';

interface IRequest {
  Id: string;
  icone: string;
  name: string;
  price: number;
  quantity: number;
  availabillity: number;
}

export default class CreateService {
  public async criar({
    Id,
    icone,
    name,
    price,
    quantity,
    availabillity,
  }: IRequest): Promise<Fichas | undefined> {
    const repository = getCustomRepository(FichasRepository);

    const inventary = await repository.findById(Id);

    if (inventary) {
      throw new AppErrors('Existe esse item', 409);
    }

    const redisCache = new RedisCache();

    const result = repository.create({
      Id,
      icone,
      name,
      price,
      quantity,
      availabillity,
    });

    await redisCache.invalidation('api-block-FICHAS');

    await repository.save(result);

    return result;
  }
}
