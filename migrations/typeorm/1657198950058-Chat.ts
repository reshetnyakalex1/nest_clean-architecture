import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';
import { tables } from '../typeorm-tables';

const tableName = tables.CHAT;

const id = new TableColumn({
    name: 'id',
    type: 'integer',
    unsigned: true,
    isGenerated: true,
    isPrimary: true,
    generationStrategy: 'increment',
});

const user1 = new TableColumn({
    name: 'user1',
    type: 'integer',
    unsigned: true,
    isNullable: false,
});

const user2 = new TableColumn({
    name: 'user2',
    type: 'integer',
    unsigned: true,
    isNullable: false,
});

const user1Foreign = new TableForeignKey({
    columnNames: ['user1'],
    referencedTableName: tables.USER,
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
});

const user2Foreign = new TableForeignKey({
    columnNames: ['user2'],
    referencedTableName: tables.USER,
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
});

const chatTable = new Table({
    name: tableName,
    columns: [id, user1, user2],
    foreignKeys: [user1Foreign, user2Foreign],
});

export class Chat1655893853068 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(chatTable, true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(chatTable, true);
    }
}
