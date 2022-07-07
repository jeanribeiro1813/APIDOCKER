import { getCustomRepository } from 'typeorm';
import CustomerItemRepository from '../../../../data/typeorm/repository/CustomerItemRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';
import CustomerItem from '../../../../data/typeorm/entities/CustomerItem';

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
  }: IRequest): Promise<CustomerItem | undefined> {
    const repository = getCustomRepository(CustomerItemRepository);

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
