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

@Entity('Friends')
class Friends {
  @PrimaryColumn('uuid')
  Id!: string;

  @Column('uuid')
  IdUser!: string;

  @Column('uuid')
  IdFriend!: string;

  @Column()
  EmailUser!: string;

  @Column()
  status!: string;

  @JoinColumn({ name: 'IdUser' })
  @ManyToOne(() => User)
  user!: User;

  @JoinColumn({ name: 'IdFriend' })
  @ManyToOne(() => User)
  friends!: User;

  // @JoinColumn({ name: 'EmailUser' })
  // @ManyToOne(() => User)
  // emailUser!: User;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}

export default Friends;
