import { getCustomRepository } from 'typeorm';
import CoinItemRepository from '../../../../data/typeorm/repository/CoinItemRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';
import CoinItem from '../../../../data/typeorm/entities/CoinItem';

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
  }: IRequest): Promise<CoinItem | AppErrors> {
    const repository = getCustomRepository(CoinItemRepository);

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
