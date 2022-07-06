import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('inventory_item')
class InventoryItens {
  @PrimaryColumn()
  item_id!: string;

  @Column()
  display_name!: string;

  @Column()
  description!: string;

  @Column()
  icon!: string;

  @Column()
  pickup!: string;

  @Column()
  stack_able!: string;

  @Column()
  price!: number;

  @Column()
  category!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}

export default InventoryItens;
