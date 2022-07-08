import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { join } from 'path';
const env = process.env.NODE_ENV || 'dev';
const dbConfig = config({ path: join(__dirname, `.env.${env}`) });

const { DB_NAME, DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT } = dbConfig.parsed;

export const dataSource = new DataSource({
    type: 'mysql',
    host: DB_HOST,
    username: DB_USERNAME,
    port: Number.parseInt(DB_PORT),
    password: DB_PASSWORD,
    database: DB_NAME,
    migrations: ['./migrations/typeorm/*.ts'],
    synchronize: false,
    debug: true,
});
