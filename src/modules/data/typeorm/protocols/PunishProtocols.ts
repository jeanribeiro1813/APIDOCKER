import Punish from '../entities/Punish';

export interface PunishProtocols {
  findById(Id: string): Promise<Punish | undefined>;
  findByUser(IdUser: string): Promise<Punish | undefined>;
  findByStatus(IsPunishing: string): Promise<Punish | undefined>;
  findAll(): Promise<Punish[]>;
}
