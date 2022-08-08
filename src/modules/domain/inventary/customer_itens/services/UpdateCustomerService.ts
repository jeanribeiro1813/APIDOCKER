<<<<<<< HEAD
import { getCustomRepository } from 'typeorm';
import CustomerItemRepository from '../../../../data/typeorm/repository/CustomerItemRepository';
import CustomerItem from '../../../../data/typeorm/entities/CustomerItem';
import { AppErrors } from '../../../../../shared/errors/AppErrors';
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
  }: IRequest): Promise<CustomerItem | AppErrors> {
    const repository = getCustomRepository(CustomerItemRepository);

    const invent = await repository.findByHashId(itemHash);

    const redisCache = new RedisCache();

    if (!invent) {
      throw new AppErrors('Não existe esse item', 404);
    }

    await redisCache.invalidation('api-block-CUSTOMERITENS');

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
=======
import { getCustomRepository } from 'typeorm';
import CustomerItemRepository from '../../../../data/typeorm/repository/CustomerItemRepository';
import CustomerItem from '../../../../data/typeorm/entities/CustomerItem';
import { AppErrors } from '../../../../../shared/errors/AppErrors';

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
  }: IRequest): Promise<CustomerItem | AppErrors> {
    const repository = getCustomRepository(CustomerItemRepository);

    const invent = await repository.findByHashId(itemHash);

    if (!invent) {
      throw new AppErrors('Não existe esse item', 404);
    }

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
>>>>>>> develop
