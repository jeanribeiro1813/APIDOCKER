import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class TableBillBoardFeed1658773957136 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'BillBoardFeed',
        columns: [
          {
            name: 'IdBillBoardFeed',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'UserId',
            type: 'uuid',
          },
          {
            name: 'imageProfile',
            type: 'varchar',
          },
          {
            name: 'Isimage',
            type: 'boolean',
          },
          {
            name: 'Url',
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
        foreignKeys: [
          {
            name: 'UseBillBoardFeed',
            referencedTableName: 'User',
            referencedColumnNames: ['UserID'],
            columnNames: ['UserId'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('BillBoardFeed');
  }
}
