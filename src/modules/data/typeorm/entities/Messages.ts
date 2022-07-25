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

  @Column('uuid')
  IdDestinatário!: string;

  @Column('uuid')
  idRemetente!: string;

  @Column()
  messages!: string;

  @JoinColumn({ name: 'idRemetente' })
  @ManyToOne(() => User)
  user!: User;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}

export default Messages;
