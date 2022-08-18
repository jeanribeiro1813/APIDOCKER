import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTablePunicao1660075229418 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Punishing',
        columns: [
          {
            name: 'Id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'IdUser',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'IsPunishing',
            type: 'boolean',
          },
          {
            name: 'TimePunishing',
            type: 'date',
          },
          {
            name: 'Describe',
            type: 'text',
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
            name: 'UserId',
            referencedTableName: 'User',
            referencedColumnNames: ['UserID'],
            columnNames: ['IdUser'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          // {
          //   name: 'UserPunishing',
          //   referencedTableName: 'User',
          //   referencedColumnNames: ['IsPunishing'],
          //   columnNames: ['IsPunishing'],
          //   onDelete: 'CASCADE',
          //   onUpdate: 'CASCADE',
          // },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Punishing');
  }
}
