import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';
import { tables } from '../typeorm-tables';

const tableName = tables.CHAT_MESSAGE;

const id = new TableColumn({
    name: 'id',
    type: 'integer',
    unsigned: true,
    isGenerated: true,
    isPrimary: true,
    generationStrategy: 'increment',
});

const sender = new TableColumn({
    name: 'sender',
    type: 'integer',
    unsigned: true,
    isNullable: false,
});

const senderForeign = new TableForeignKey({
    columnNames: ['sender'],
    referencedTableName: tables.USER,
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
});

const chat = new TableColumn({
    name: 'chatId',
    type: 'integer',
    unsigned: true,
    isNullable: false,
});

const chatForeign = new TableForeignKey({
    columnNames: ['chatId'],
    referencedTableName: tables.CHAT,
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
});

const text = new TableColumn({
    name: 'text',
    type: 'varchar(60)',
    isNullable: false,
});

const createdAt = new TableColumn({
    name: 'createdAt',
    type: 'varchar(30)',
    isNullable: false,
});

const chatMessageTable = new Table({
    name: tableName,
    columns: [id, sender, chat, text, createdAt],
    foreignKeys: [senderForeign, chatForeign],
});

export class ChatMessage1655893853068 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(chatMessageTable, true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(chatMessageTable, true);
    }
}
