import CustomerItem from '../entities/CustomerItem';

export interface CustomerItemProtocols {
  findByHashId(itemHash: string): Promise<CustomerItem | undefined>;
  findById(itemID: string): Promise<CustomerItem | undefined>;
  findByName(displayName: string): Promise<CustomerItem | undefined>;
  findByCategory(category: string): Promise<CustomerItem | undefined>;
  findAll(): Promise<CustomerItem[] | undefined>;
}
