import { Repository, EntityRepository } from 'typeorm';
import CoinItem from '../entities/CoinItem';
import { CoinItemProtocols } from '../protocols/CoinItemProtocols';

@EntityRepository(CoinItem)
export default class CustomerItemRepository
  extends Repository<CoinItem>
  implements CoinItemProtocols
{
  public async findByCategory(category: string): Promise<CoinItem | undefined> {
    const categoria = this.findOne({ where: { category } });

    return categoria;
  }
  public async findById(itemID: string): Promise<CoinItem | undefined> {
    const index = this.findOne({ where: { itemID } });

    return index;
  }
  public async findByName(displayName: string): Promise<CoinItem | undefined> {
    const index = this.findOne({ where: { displayName } });

    return index;
  }

  public async findAll(): Promise<CoinItem[] | undefined> {
    const all = this.find({});

    return all;
  }

  public async findByHashId(itemHash: string): Promise<CoinItem | undefined> {
    const hash = this.findOne({ where: { itemHash } });

    return hash;
  }
}
