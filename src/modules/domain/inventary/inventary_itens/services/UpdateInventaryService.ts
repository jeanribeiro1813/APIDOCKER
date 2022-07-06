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

export default class UpdateInventaryService {
  public async update({
    item_id,
    display_name,
    description,
    icon,
    pickup,
    stack_able,
    price,
    category,
  }: IRequest): Promise<InventaryItens | AppErrors> {
    const repository = getCustomRepository(InventaryItensRepository);

    const invent = await repository.findById(item_id);

    if (!invent) {
      throw new AppErrors('Não existe esse item', 404);
    }

    invent.display_name = display_name ? display_name : invent.display_name;
    invent.description = description ? description : invent.description;
    invent.icon = icon ? icon : invent.icon;
    invent.pickup = pickup ? pickup : invent.pickup;
    invent.stack_able = stack_able ? stack_able : invent.stack_able;
    invent.price = price ? price : invent.price;
    invent.category = category ? category : invent.category;

    const result = await repository.save(invent);

    return result;
  }
}
