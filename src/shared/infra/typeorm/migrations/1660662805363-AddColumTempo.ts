import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColumTempo1660662805363 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'User',
      new TableColumn({
        name: 'Tempo',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('Tempo', 'User');
  }
}
