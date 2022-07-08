import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { UsersServiceInterface } from '../modules/users/users.service.interface';
import { userServiceToken } from '../modules/users/users.service.provider';
import { ConfigService } from '@nestjs/config';
import { envVariables } from '../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    private readonly logger = Logger;
    constructor(
        @Inject(userServiceToken) private readonly userService: UsersServiceInterface,
        private readonly configService: ConfigService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.getOrThrow(envVariables.tokenSecret),
        });
    }

    async validate(payload: any) {
        return this.userService.getById(payload.id);
    }
}
