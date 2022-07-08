import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthConfigModule } from '../../auth/auth-config.module';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthEntitiesFactory } from './entities/AuthEntitiesFactory';
import { jwtServiceProvider } from './jwt/jwt.service.provider';
import { JwtService } from '@nestjs/jwt';
import { authServiceProvider } from './auth.service.provider';
import { HashService } from './hash/hash.service';
import { hashServiceProvider } from './hash/hash.service.provider';

@Module({
    imports: [AuthConfigModule, UsersModule],
    controllers: [AuthController],
    providers: [
        AuthService,
        AuthEntitiesFactory,
        jwtServiceProvider,
        JwtService,
        authServiceProvider,
        HashService,
        hashServiceProvider,
    ],
    exports: [AuthService, AuthConfigModule],
})
export class AuthModule {}
