import { Repository, EntityRepository } from 'typeorm';
import Inventary from '../entities/Inventary';
import { InventaryProtocols } from '../protocols/InventaryProtocols';

@EntityRepository(Inventary)
export default class InventaryRepository
  extends Repository<Inventary>
  implements InventaryProtocols
{
  public async findById(inventoryID: string): Promise<Inventary | undefined> {
    const index = this.findOne({ where: { inventoryID } });

    return index;
  }

  public async findAll(): Promise<Inventary[] | undefined> {
    const all = this.find({});

    return all;
  }
}
