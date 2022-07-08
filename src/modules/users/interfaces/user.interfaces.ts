import { TestEntity } from '../../tests/test.entity';
import { Roles } from '../../../constants/Roles';

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    role: Roles;
}

export interface IUserWithTests extends IUser {
    tests: TestEntity[];
}
