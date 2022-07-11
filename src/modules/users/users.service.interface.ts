import { IdObject } from '../../interfaces';
import { User } from './entities/User';
import { NewUser } from './entities/NewUser';
import { UserWithTests } from './entities/UserWithTests';

export interface UsersServiceInterface {
    getById(id: number): Promise<User>;
    createUser(user: NewUser): Promise<IdObject>;
    getWithTests(id: number): Promise<UserWithTests>;
    getAllUsers(id: number): Promise<User[]>;
    getByEmail(email: string): Promise<User | null>;
    doesUserWithEmailExist(email: string): Promise<boolean>;
}
