import { Injectable } from '@nestjs/common';
import { Token } from './Token';

@Injectable()
export class AuthEntitiesFactory {
    getToken(accessToken): Token {
        return new Token(accessToken);
    }
}
