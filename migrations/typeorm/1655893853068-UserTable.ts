import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';
import { tables } from '../typeorm-tables';

const tableName = tables.USER;

const id = new TableColumn({
    name: 'id',
    type: 'integer',
    unsigned: true,
    isGenerated: true,
    isPrimary: true,
    generationStrategy: 'increment',
});

const firstName = new TableColumn({
    name: 'firstName',
    type: 'varchar(60)',
    isNullable: false,
});

const lastName = new TableColumn({
    name: 'lastName',
    type: 'varchar(60)',
    isNullable: false,
});

const role = new TableColumn({
    name: 'role',
    type: 'varchar(20)',
    isNullable: false,
});

const userTable = new Table({
    name: tableName,
    columns: [id, firstName, lastName, role],
});

export class UserTable1655893853068 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(userTable, true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(tableName, true);
    }
}
