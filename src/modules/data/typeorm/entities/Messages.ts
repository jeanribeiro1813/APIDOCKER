import User from './Users';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Messages')
class Messages {
  @PrimaryColumn('uuid')
  IdMessages!: string;

  @Column()
  Sala!: string;

  @Column('uuid')
  IdRemetente!: string;

  @Column()
  messages!: string;

  @JoinColumn({ name: 'IdRemetente' })
  @ManyToOne(() => User)
  user!: User;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}

export default Messages;
