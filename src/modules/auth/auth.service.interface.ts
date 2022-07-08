import { Body } from '@nestjs/common';
import { Credentials } from './entities/Credentials';
import { Token } from './entities/Token';
import { NewUser } from '../users/entities/NewUser';
import { IdObject } from '../../interfaces';

export interface AuthServiceInterface {
    login(credentials: Credentials): Promise<Token>;
    signUp(newUser: NewUser): Promise<IdObject>;
}
