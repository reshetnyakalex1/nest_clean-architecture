import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userServiceProvider } from './users.service.provider';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './db/typeorm/user.entity';
import { UsersTypeormRepository } from './db/typeorm/users.typeorm.repository';
import { TestsModule } from '../tests/tests.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from './db/sequelize/user.model';
import { usersRepositoryProvider } from './db/users.repository.provider';
import { UsersGateway } from './db/typeorm/users.gateway';
import { UsersSequelizeRepository } from './db/sequelize/users.sequelize.repository';
import { usersGatewayProvider } from './db/users.gateway.provider';

@Module({
    imports: [
        ConfigModule,
        TypeOrmModule.forFeature([UserEntity]),
        TestsModule,
        SequelizeModule.forFeature([UserModel]),
    ],
    controllers: [UsersController],
    providers: [
        UsersService,
        userServiceProvider,
        UsersTypeormRepository,
        UsersSequelizeRepository,
        usersRepositoryProvider,
        usersGatewayProvider,
        UsersGateway,
    ],
    exports: [UsersService, userServiceProvider],
})
export class UsersModule {}
