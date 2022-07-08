import { IdObject } from '../../interfaces';
import { User } from './entities/User';
import { NewUser } from './entities/NewUser';

export interface UsersServiceInterface {
    getById(id: number): Promise<User>;
    createUser(user: NewUser): Promise<IdObject>;
    getWithTests(id: number): Promise<User>;
    getAllUsers(id: number): Promise<User[]>;
    getByEmail(email: string): Promise<User | null>;
    doesUserWithEmailExist(email: string): Promise<boolean>;
}
