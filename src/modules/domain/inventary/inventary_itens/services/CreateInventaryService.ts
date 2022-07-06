import { getCustomRepository } from 'typeorm';
import InventaryItensRepository from '../../../../data/typeorm/repository/InventaryItensRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';
import InventaryItens from '../../../../data/typeorm/entities/InventaryItens';

interface IRequest {
  item_id: string;
  display_name: string;
  description: string;
  icon: string;
  pickup: string;
  stack_able: string;
  price: number;
  category: string;
}

export default class CreateService {
  public async criar({
    item_id,
    display_name,
    description,
    icon,
    pickup,
    stack_able,
    price,
    category,
  }: IRequest): Promise<InventaryItens | undefined> {
    const repository = getCustomRepository(InventaryItensRepository);

    const inventary = await repository.findByName(display_name);

    if (inventary) {
      throw new AppErrors('Existe esse item', 409);
    }

    const result = repository.create({
      item_id,
      display_name,
      description,
      icon,
      pickup,
      stack_able,
      price,
      category,
    });

    await repository.save(result);

    return result;
  }
}
