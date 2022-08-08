<<<<<<< HEAD
import CoinItem from '../entities/Inventary';

export interface InventaryProtocols {
  findById(itemID: string): Promise<CoinItem | undefined>;
  findAll(): Promise<CoinItem[]>;
}
=======
import CoinItem from '../entities/Inventary';

export interface InventaryProtocols {
  findById(itemID: string): Promise<CoinItem | undefined>;
  findAll(): Promise<CoinItem[] | undefined>;
}
>>>>>>> develop
