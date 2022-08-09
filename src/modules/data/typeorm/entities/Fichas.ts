import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Fichas')
class Fichas {
  @PrimaryColumn('uuid')
  Id!: string;

  @Column()
  icone!: string;

  @Column()
  name!: string;

  @Column()
  price!: number;

  @Column()
  quantity!: number;

  @Column()
  availabillity!: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}

export default Fichas;
