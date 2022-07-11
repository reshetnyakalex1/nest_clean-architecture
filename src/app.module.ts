import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ConfigModuleProvider } from './config/config.module.provider';
import { PinoLoggerService } from './logger/logger.service';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './filters/exception.filter';
import { AsyncStorageService } from './async-storage/async-storage.service';
import { DbModule } from './db/db.module';
import { TestsModule } from './modules/tests/tests.module';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './modules/auth/auth.module';

@Module({
    imports: [ConfigModuleProvider, DbModule, UsersModule, TestsModule, PassportModule, AuthModule],
    providers: [
        PinoLoggerService,
        {
            provide: APP_FILTER,
            useClass: AllExceptionsFilter,
        },
        AsyncStorageService,
    ],
})
export class AppModule {}
