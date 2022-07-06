import InventaryItens from '../entities/InventaryItens';

export interface InventaryItemProtocols {
  findById(item_id: string): Promise<InventaryItens | undefined>;
  findByName(display_name: string): Promise<InventaryItens | undefined>;
  findByCategory(category: string): Promise<InventaryItens | undefined>;
  findAll(): Promise<InventaryItens[] | undefined>;
}
