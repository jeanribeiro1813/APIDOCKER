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

export default class UpdateInventaryService {
  public async update({
    Id,
    icone,
    name,
    price,
    quantity,
    availabillity,
  }: IRequest): Promise<Fichas | AppErrors> {
    const repository = getCustomRepository(FichasRepository);

    const invent = await repository.findById(Id);

    const redisCache = new RedisCache();

    if (!invent) {
      throw new AppErrors('Não existe esse item', 404);
    }

    await redisCache.invalidation('api-block-FICHA');

    invent.icone = icone ? icone : invent.icone;
    invent.name = name ? name : invent.name;
    invent.price = price ? price : invent.price;
    invent.quantity = quantity ? quantity : invent.quantity;
    invent.availabillity = availabillity ? availabillity : invent.availabillity;

    const result = await repository.save(invent);

    return result;
  }
}
