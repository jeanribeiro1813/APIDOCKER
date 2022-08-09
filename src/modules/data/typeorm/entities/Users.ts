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

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}

export default User;
