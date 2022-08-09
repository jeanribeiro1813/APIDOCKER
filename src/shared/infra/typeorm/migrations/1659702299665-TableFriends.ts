import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class TableFriends1659702299665 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Friends',
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
            name: 'IdFriend',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'EmailUser',
            type: 'varchar',
          },
          {
            name: 'status',
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
            name: 'UserId',
            referencedTableName: 'User',
            referencedColumnNames: ['UserID'],
            columnNames: ['IdUser'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FriendsId',
            referencedTableName: 'User',
            referencedColumnNames: ['UserID'],
            columnNames: ['IdFriend'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'EmailUser',
            referencedTableName: 'User',
            referencedColumnNames: ['UserEmail'],
            columnNames: ['EmailUser'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Friends');
  }
}
