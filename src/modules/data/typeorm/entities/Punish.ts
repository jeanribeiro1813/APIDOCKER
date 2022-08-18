import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Punishing')
class Punish {
  @PrimaryColumn('uuid')
  Id!: string;

  @Column('uuid')
  IdUser!: string;

  @Column()
  IsPunishing!: boolean;

  @Column()
  TimePunishing!: string;

  @Column()
  Describe!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}

export default Punish;
