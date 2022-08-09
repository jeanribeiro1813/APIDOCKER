import { Repository, EntityRepository } from 'typeorm';
import Punicao from '../entities/Punicao';
import { PunicaoProtocols } from '../protocols/PunicaoProtocols';

@EntityRepository(Punicao)
export default class PunicaoRepository
  extends Repository<Punicao>
  implements PunicaoProtocols
{
  public async findById(Id: string): Promise<Punicao | undefined> {
    const index = this.findOne({ where: { Id } });

    return index;
  }
  public async findByUser(IdUser: string): Promise<Punicao | undefined> {
    const index = this.findOne({ where: { IdUser } });

    return index;
  }

  public async findByStatus(
    status_punicao: string,
  ): Promise<Punicao | undefined> {
    const index = this.findOne({ where: { status_punicao } });

    return index;
  }

  public async findAll(): Promise<Punicao[]> {
    const all = this.find({});

    return all;
  }
}
