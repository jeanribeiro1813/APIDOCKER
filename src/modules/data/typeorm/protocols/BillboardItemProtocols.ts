<<<<<<< HEAD
import Billboard from '../entities/Billboard';

export interface BillboardProtocols {
  findById(BillboardID: string): Promise<Billboard | undefined>;
  findAll(): Promise<Billboard[]>;
}
=======
import Billboard from '../entities/Billboard';

export interface BillboardProtocols {
  findById(BillboardID: string): Promise<Billboard | undefined>;
  findAll(): Promise<Billboard[] | undefined>;
}
>>>>>>> develop
