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

export default class CreateService {
  public async criar({
    itemHash,
    itemID,
    displayName,
    description,
    icon,
    stackable,
    category,
  }: IRequest): Promise<CoinItem | undefined> {
    const repository = getCustomRepository(CoinItemRepository);

    const inventary = await repository.findByName(displayName);

    if (inventary) {
      throw new AppErrors('Existe esse item', 409);
    }

    const result = repository.create({
      itemHash,
      itemID,
      displayName,
      description,
      icon,
      stackable,
      category,
    });

    await repository.save(result);

    return result;
  }
}
