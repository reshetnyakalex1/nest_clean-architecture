import { Module } from '@nestjs/common';
import { typeOrmConnection } from './TypeOrmConnection';
import { sequelizeConnection } from './SequelizeConnection';

@Module({
    imports: [typeOrmConnection, sequelizeConnection],
    exports: [typeOrmConnection, sequelizeConnection],
})
export class DbModule {}
