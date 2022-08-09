import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBillboard1657203242870 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Billboard',
        columns: [
          {
            name: 'BillboardID',
            type: 'uuid',
            isPrimary: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'width',
            type: 'varchar',
          },
          {
            name: 'height',
            type: 'varchar',
          },
          {
            name: 'vectorx',
            type: 'numeric',
          },
          {
            name: 'vectory',
            type: 'numeric',
          },
          {
            name: 'vectorz',
            type: 'numeric',
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
    await queryRunner.dropTable('Billboard');
  }
}
