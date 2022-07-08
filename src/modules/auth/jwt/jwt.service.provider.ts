import { JwtService } from '@nestjs/jwt';

export const jwtServiceToken = Symbol('JwtServiceToken');

export const jwtServiceProvider = {
    provide: jwtServiceToken,
    useClass: JwtService,
};
