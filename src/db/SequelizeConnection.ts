import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { envVariables } from '../constants';

export const sequelizeConnection = SequelizeModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => {
        return {
            dialect: 'mysql',
            host: configService.getOrThrow(envVariables.dbHost),
            port: configService.getOrThrow(envVariables.dbPort),
            username: configService.getOrThrow(envVariables.dbUsername),
            password: configService.getOrThrow(envVariables.dbPassword),
            database: configService.getOrThrow(envVariables.dbName),
            autoLoadModels: true,
            synchronize: false,
            logging: true,
        };
    },
    inject: [ConfigService],
});
