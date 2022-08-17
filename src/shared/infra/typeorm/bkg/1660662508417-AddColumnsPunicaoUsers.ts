import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColumnsUsers1660662508417 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'User',
      new TableColumn({
        name: 'Punicao',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('Punicao', 'User');
  }
}
