import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableEmail1660651680470 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Email',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'id_rementente',
            type: 'uuid',
          },
          {
            name: 'id_destinatario',
            type: 'uuid',
          },
          {
            name: 'titulo_mensagem',
            type: 'varchar',
          },
          {
            name: 'data',
            type: 'date',
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
            name: 'IdremententeToken',
            referencedTableName: 'User',
            referencedColumnNames: ['UserID'],
            columnNames: ['id_rementente'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'IddestinatarioToken',
            referencedTableName: 'User',
            referencedColumnNames: ['UserID'],
            columnNames: ['id_destinatario'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Email');
  }
}
