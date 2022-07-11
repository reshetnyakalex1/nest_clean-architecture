import { User } from '../entities/User';
import { NewUser } from '../entities/NewUser';
import { UserWithTests } from '../entities/UserWithTests';

export interface UsersGatewayInterface {
    findOne(id: number): Promise<User | null>;

    create(user: NewUser): Promise<number>;

    findOneWithTests(id: number): Promise<UserWithTests | null>;

    getAll(): Promise<User[]>;

    getByEmail(email: string): Promise<User | null>;
}
