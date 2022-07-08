import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';
import { tables } from '../typeorm-tables';

const tableName = tables.TEST;

const id = new TableColumn({
    name: 'id',
    type: 'integer',
    unsigned: true,
    isGenerated: true,
    isPrimary: true,
    generationStrategy: 'increment',
});

const firstName = new TableColumn({
    name: 'name',
    type: 'varchar(60)',
    isNullable: false,
});

const ownerId = new TableColumn({
    name: 'ownerId',
    type: 'integer',
    isNullable: false,
    unsigned: true,
});

const ownerIdForeign = new TableForeignKey({
    columnNames: ['ownerId'],
    referencedTableName: tables.USER,
    referencedColumnNames: ['id'],
});

const testTable = new Table({
    name: tableName,
    columns: [id, firstName, ownerId],
    foreignKeys: [ownerIdForeign],
});

export class TestsTable1655901276719 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(testTable, true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(tableName, true);
    }
}
