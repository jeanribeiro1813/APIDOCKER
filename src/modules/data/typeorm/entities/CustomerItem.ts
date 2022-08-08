import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('CustomerItem')
class CustomerItem {
  @PrimaryColumn()
  itemHash!: string;

  @Column('uuid')
  itemID!: string;

  @Column()
  displayName!: string;

  @Column()
  description!: string;

  @Column()
  icon!: string;

  @Column()
  stackable!: string;

  @Column()
  category!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}

export default CustomerItem;
