import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { Config } from './config/config.module.provider';
import { PinoLoggerService } from './logger/logger.service';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './filters/exception.filter';
import { AsyncStorageService } from './async-storage/async-storage.service';
import { DbModule } from './db/db.module';
import { TestsModule } from './modules/tests/tests.module';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './modules/auth/auth.module';

@Module({
    imports: [Config, DbModule, UsersModule, TestsModule, PassportModule, AuthModule],
    controllers: [AppController],
    providers: [
        AppService,
        PinoLoggerService,
        {
            provide: APP_FILTER,
            useClass: AllExceptionsFilter,
        },
        AsyncStorageService,
    ],
})
export class AppModule {}
