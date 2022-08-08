import { getCustomRepository } from 'typeorm';
import InventaryItensRepository from '../../../../data/typeorm/repository/InventaryItensRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';
import InventaryItens from '../../../../data/typeorm/entities/InventaryItens';
import RedisCache from '../../../../../shared/cache/Redischace';

interface IRequest {
  itemHash: string;
  itemID: string;
  displayName: string;
  description: string;
  icon: string;
  stackable: string;
  category: string;
}

export default class UpdateInventaryService {
  public async update({
    itemHash,
    itemID,
    displayName,
    description,
    icon,
    stackable,
    category,
  }: IRequest): Promise<InventaryItens | AppErrors> {
    const repository = getCustomRepository(InventaryItensRepository);

    const invent = await repository.findByHashId(itemHash);

    const redisCache = new RedisCache();

    if (!invent) {
      throw new AppErrors('Não existe esse item', 404);
    }

    await redisCache.invalidation('api-block-INVENTARYITENS');

    invent.itemID = itemID ? itemID : invent.itemID;
    invent.displayName = displayName ? displayName : invent.displayName;
    invent.description = description ? description : invent.description;
    invent.icon = icon ? icon : invent.icon;
    invent.stackable = stackable ? stackable : invent.stackable;
    invent.category = category ? category : invent.category;

    const result = await repository.save(invent);

    return result;
  }
}
