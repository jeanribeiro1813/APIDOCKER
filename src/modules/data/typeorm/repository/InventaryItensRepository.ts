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
  public async findById(itemID: string): Promise<InventaryItens | undefined> {
    const index = this.findOne({ where: { itemID } });

    return index;
  }
  public async findByName(
    displayName: string,
  ): Promise<InventaryItens | undefined> {
    const index = this.findOne({ where: { displayName } });

    return index;
  }

  public async findAll(): Promise<InventaryItens[]> {
    const all = this.find({});

    return all;
  }

  public async findByHashId(
    itemHash: string,
  ): Promise<InventaryItens | undefined> {
    const hash = this.findOne({ where: { itemHash } });

    return hash;
  }
}
