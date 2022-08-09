import Punicao from '../entities/Punicao';

export interface PunicaoProtocols {
  findById(Id: string): Promise<Punicao | undefined>;
  findByUser(IdUser: string): Promise<Punicao | undefined>;
  findByStatus(status_punicao: string): Promise<Punicao | undefined>;
  findAll(): Promise<Punicao[]>;
}
