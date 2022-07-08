import { BadRequestException, Body, ConflictException, Inject, Injectable, Logger } from '@nestjs/common';
import { userServiceToken } from '../users/users.service.provider';
import { UsersServiceInterface } from '../users/users.service.interface';
import { Token } from './entities/Token';
import { Credentials } from './entities/Credentials';
import { AuthEntitiesFactory } from './entities/AuthEntitiesFactory';
import { jwtServiceToken } from './jwt/jwt.service.provider';
import { JwtServiceInterface } from './jwt/jwt.service.interface';
import { AuthServiceInterface } from './auth.service.interface';
import { NewUser } from '../users/entities/NewUser';
import { IdObject } from '../../interfaces';
import { hashServiceToken } from './hash/hash.service.provider';
import { HashServiceInterface } from './hash/hash.service.interface';

@Injectable()
export class AuthService implements AuthServiceInterface {
    private readonly logger = new Logger('AuthService');
    constructor(
        @Inject(userServiceToken) private readonly userService: UsersServiceInterface,
        private readonly authEntitiesFactory: AuthEntitiesFactory,
        @Inject(jwtServiceToken) private readonly jwtService: JwtServiceInterface,
        @Inject(hashServiceToken) private readonly hashService: HashServiceInterface,
    ) {}

    async login(credentials: Credentials): Promise<Token> {
        const user = await this.userService.getById(1);
        const accessToken = await this.jwtService.signAsync({ id: user.id }, { expiresIn: '2h' });
        this.logger.log(`User: id ${user.id} just logged in.`);
        return this.authEntitiesFactory.getToken(accessToken);
    }

    async signUp(newUser: NewUser): Promise<IdObject> {
        if (!newUser.doPasswordsMatch()) {
            throw new BadRequestException("Passwords don't match.");
        }

        const doesUserExist = await this.userService.doesUserWithEmailExist(newUser.getEmail());

        if (doesUserExist) {
            throw new ConflictException('User with this email already exists.');
        }

        const hashedPassword = await this.hashService.hash(newUser.getPassword());
        newUser.setHashedPassword(hashedPassword);

        return this.userService.createUser(newUser);
    }
}
