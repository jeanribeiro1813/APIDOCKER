import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCoinItem1657203214692 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'CoinItem',
        columns: [
          {
            name: 'itemHash',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'item_id',
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
    await queryRunner.dropTable('CoinItem');
  }
}
