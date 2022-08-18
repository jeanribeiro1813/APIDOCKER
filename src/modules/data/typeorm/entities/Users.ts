import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('User')
class User {
  @PrimaryColumn('uuid')
  UserID!: string;

  @Column()
  UserEmail!: string;

  @Column()
  UserPassword!: string;

  @Column()
  TpConta!: string;

  @Column()
  IsPunishing!: boolean;

  @Column()
  PunishingType!: boolean;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}

export default User;
