import { Repository, EntityRepository } from 'typeorm';
import Billboard from '../entities/Billboard';
import { BillboardProtocols } from '../protocols/BillboardItemProtocols';

@EntityRepository(Billboard)
export default class BillboardRepository
  extends Repository<Billboard>
  implements BillboardProtocols
{
  public async findById(BillboardID: string): Promise<Billboard | undefined> {
    const index = this.findOne({ where: { BillboardID } });

    return index;
  }

  public async findAll(): Promise<Billboard[] | undefined> {
    const all = this.find({});

    return all;
  }
}
