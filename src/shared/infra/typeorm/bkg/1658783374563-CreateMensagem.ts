import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMensagem1658783374563 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Messages',
        columns: [
          {
            name: 'IdMessages',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'Sala',
            type: 'varchar',
          },
          {
            name: 'IdRemetente',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'messages',
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
            name: 'IdRemetenteMessages',
            referencedTableName: 'User',
            referencedColumnNames: ['UserID'],
            columnNames: ['IdRemetente'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Messages');
  }
}
