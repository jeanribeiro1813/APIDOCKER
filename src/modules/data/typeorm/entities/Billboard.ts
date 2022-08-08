import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Billboard')
class Billboard {
  @PrimaryColumn('uuid')
  BillboardID!: string;

  @Column()
  width!: string;

  @Column()
  height!: string;

  @Column()
  vectorx!: number;

  @Column()
  vectory!: number;

  @Column()
  vectorz!: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}

export default Billboard;
