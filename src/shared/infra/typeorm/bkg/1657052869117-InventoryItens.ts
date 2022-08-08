import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class InventoryItens1657052869117 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'InventoryItem',
        columns: [
          {
            name: 'itemHash',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'itemID',
            type: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'displayName',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'text',
          },
          {
            name: 'icon',
            type: 'varchar',
          },
          {
            name: 'stackable',
            type: 'boolean',
          },
          {
            name: 'category',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('InventoryItem');
  }
}
