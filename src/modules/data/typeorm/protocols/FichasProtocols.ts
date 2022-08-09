import Fichas from '../entities/Fichas';

export interface FichasProtocols {
  findById(Id: string): Promise<Fichas | undefined>;
  findByName(name: string): Promise<Fichas | undefined>;
  findByLiberado(availabillity: number): Promise<Fichas[] | undefined>;
  findAll(): Promise<Fichas[]>;
}
