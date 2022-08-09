import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Punicao')
class Punicao {
  @PrimaryColumn('uuid')
  Id!: string;

  @Column('uuid')
  IdUser!: string;

  @Column()
  tipo_punicao!: string;

  @Column()
  tempo_punicao!: string;

  @Column()
  status_punicao!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}

export default Punicao;
