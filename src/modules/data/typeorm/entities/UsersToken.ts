import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Generated,
} from 'typeorm';

@Entity('UserTokens')
class User_Token {
  @PrimaryGeneratedColumn('uuid')
  IdToken!: string;

  @Column()
  @Generated('uuid')
  Token!: string;

  @Column('uuid')
  UserIDToken!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}

export default User_Token;
