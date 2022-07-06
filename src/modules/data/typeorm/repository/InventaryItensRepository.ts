import { Repository, EntityRepository } from 'typeorm';
import InventaryItens from '../entities/InventaryItens';
import { InventaryItemProtocols } from '../protocols/InventaryItensProtocols';

@EntityRepository(InventaryItens)
export default class InventaryItensRepository
  extends Repository<InventaryItens>
  implements InventaryItemProtocols
{
  public async findByCategory(
    category: string,
  ): Promise<InventaryItens | undefined> {
    const categoria = this.findOne({ where: { category } });

    return categoria;
  }
  public async findById(item_id: string): Promise<InventaryItens | undefined> {
    const index = this.findOne({ where: { item_id } });

    return index;
  }
  public async findByName(
    display_name: string,
  ): Promise<InventaryItens | undefined> {
    const index = this.findOne({ where: { display_name } });

    return index;
  }

  public async findAll(): Promise<InventaryItens[] | undefined> {
    const all = this.find({});

    return all;
  }
}
