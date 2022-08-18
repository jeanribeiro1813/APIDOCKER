import { Repository, EntityRepository } from 'typeorm';
import Punish from '../entities/Punish';
import { PunishProtocols } from '../protocols/PunishProtocols';

@EntityRepository(Punish)
export default class PunicaoRepository
  extends Repository<Punish>
  implements PunishProtocols
{
  public async findById(Id: string): Promise<Punish | undefined> {
    const index = this.findOne({ where: { Id } });

    return index;
  }
  public async findByUser(IdUser: string): Promise<Punish | undefined> {
    const index = this.findOne({ where: { IdUser } });

    return index;
  }

  public async findByStatus(IsPunishing: string): Promise<Punish | undefined> {
    const index = this.findOne({ where: { IsPunishing } });

    return index;
  }

  public async findAll(): Promise<Punish[]> {
    const all = this.find({});

    return all;
  }
}
