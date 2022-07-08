import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
import { tables } from '../typeorm-tables';

const password = new TableColumn({
    name: 'password',
    type: 'varchar(60)',
    isNullable: false,
});

const email = new TableColumn({
    name: 'email',
    type: 'varchar(60)',
    isNullable: false,
    isUnique: true,
});

export class AddCredsForUser1657033146962 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns(tables.USER, [password, email]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns(tables.USER, [password, email]);
    }
}
