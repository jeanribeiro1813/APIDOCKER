import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColumTPCONTA1657574474604 implements MigrationInterface {
  name = 'AddColumTPCONTA1657574474604';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'User',
      new TableColumn({
        name: 'TpConta',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('TpConta', 'User');
  }
}
