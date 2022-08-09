import CoinItem from '../entities/CoinItem';

export interface CoinItemProtocols {
  findByHashId(itemHash: string): Promise<CoinItem | undefined>;
  findById(itemID: string): Promise<CoinItem | undefined>;
  findByName(displayName: string): Promise<CoinItem | undefined>;
  findByCategory(category: string): Promise<CoinItem | undefined>;
  findAll(): Promise<CoinItem[]>;
}
