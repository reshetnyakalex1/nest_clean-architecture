import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { envVariables } from '../constants';

export const typeOrmConnection = TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => {
        return {
            type: 'mysql',
            host: configService.getOrThrow(envVariables.dbHost),
            port: configService.getOrThrow(envVariables.dbPort),
            database: configService.getOrThrow(envVariables.dbName),
            username: configService.getOrThrow(envVariables.dbUsername),
            password: configService.getOrThrow(envVariables.dbPassword),
            autoLoadEntities: true,
        };
    },
    inject: [ConfigService],
});
