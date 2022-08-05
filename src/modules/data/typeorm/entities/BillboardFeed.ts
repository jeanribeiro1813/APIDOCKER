import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('BillBoardFeed')
class Billboard {
  @PrimaryColumn('uuid')
  IdBillBoardFeed!: string;

  @Column('uuid')
  UserId!: string;

  @Column()
  imageProfile!: string;

  @Column()
  Isimage!: boolean;

  @Column()
  Url!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}

export default Billboard;
