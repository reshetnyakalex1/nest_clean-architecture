import { IUser, IUserWithTests } from '../interfaces/user.interfaces';
import { Roles } from '../../../constants/Roles';

export class User implements IUser, IUserWithTests {
    id = 0;
    firstName = '';
    lastName = '';
    email = '';
    role = Roles.GUEST;

    tests = [];
}
