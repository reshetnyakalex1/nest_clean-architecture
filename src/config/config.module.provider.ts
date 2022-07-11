import { ConfigModule } from '@nestjs/config';

export const ConfigModuleProvider = ConfigModule.forRoot({
    envFilePath: '.env.dev',
    isGlobal: true,
});
