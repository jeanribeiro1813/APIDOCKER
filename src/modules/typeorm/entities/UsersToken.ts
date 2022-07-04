import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Generated,
}
from 'typeorm'


@Entity('user_tokens')
 class User_Token{

  @PrimaryGeneratedColumn('uuid')
  id!:string

  @Column()
  @Generated('uuid')
  token!:string

  @Column('uuid')
  user_id!:string

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;


}

export default User_Token
