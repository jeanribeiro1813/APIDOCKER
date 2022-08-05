import InventaryItens from '../entities/InventaryItens';

export interface InventaryItemProtocols {
  findByHashId(itemHash: string): Promise<InventaryItens | undefined>;
  findById(itemID: string): Promise<InventaryItens | undefined>;
  findByName(displayName: string): Promise<InventaryItens | undefined>;
  findByCategory(category: string): Promise<InventaryItens | undefined>;
  findAll(): Promise<InventaryItens[] | undefined>;
}
