import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { envVariables } from '../constants';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../modules/users/users.module';

@Module({
    imports: [
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => {
                return {
                    secret: configService.getOrThrow(envVariables.tokenSecret),
                    signOptions: { expiresIn: 60 * 15 },
                };
            },
            inject: [ConfigService],
        }),
        UsersModule,
    ],
    providers: [JwtStrategy],
    exports: [JwtModule],
})
export class AuthConfigModule {}
