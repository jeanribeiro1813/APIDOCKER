import { Repository, EntityRepository } from 'typeorm';
import Fichas from '../entities/Fichas';
import { FichasProtocols } from '../protocols/FichasProtocols';

@EntityRepository(Fichas)
export default class FichasRepository
  extends Repository<Fichas>
  implements FichasProtocols
{
  public async findById(Id: string): Promise<Fichas | undefined> {
    const index = this.findOne({ where: { Id } });

    return index;
  }
  public async findByName(name: string): Promise<Fichas | undefined> {
    const index = this.findOne({ where: { name } });

    return index;
  }

  public async findByLiberado(
    availabillity: number,
  ): Promise<Fichas[] | undefined> {
    const index = this.find({ where: { availabillity } });

    return index;
  }

  public async findAll(): Promise<Fichas[]> {
    const all = this.find({});

    return all;
  }
}
