import { Repository, EntityRepository } from 'typeorm';
import CustomerItem from '../entities/CustomerItem';
import { CustomerItemProtocols } from '../protocols/CustomerItemProtocols';

@EntityRepository(CustomerItem)
export default class CustomerItemRepository
  extends Repository<CustomerItem>
  implements CustomerItemProtocols
{
  public async findByCategory(
    category: string,
  ): Promise<CustomerItem | undefined> {
    const categoria = this.findOne({ where: { category } });

    return categoria;
  }
  public async findById(itemID: string): Promise<CustomerItem | undefined> {
    const index = this.findOne({ where: { itemID } });

    return index;
  }
  public async findByName(
    displayName: string,
  ): Promise<CustomerItem | undefined> {
    const index = this.findOne({ where: { displayName } });

    return index;
  }

  public async findAll(): Promise<CustomerItem[] | undefined> {
    const all = this.find({});

    return all;
  }

  public async findByHashId(
    itemHash: string,
  ): Promise<CustomerItem | undefined> {
    const hash = this.findOne({ where: { itemHash } });

    return hash;
  }
}
