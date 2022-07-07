import { getCustomRepository } from 'typeorm';
import InventaryItensRepository from '../../../../data/typeorm/repository/InventaryItensRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';
import InventaryItens from '../../../../data/typeorm/entities/InventaryItens';

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
  }: IRequest): Promise<InventaryItens | undefined> {
    const repository = getCustomRepository(InventaryItensRepository);

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
