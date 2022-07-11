import { Roles } from '../../../constants/Roles';

export class User {
    id = 0;
    firstName = '';
    lastName = '';
    email = '';
    role = Roles.GUEST;
    password = '';

    getPassword() {
        return this.password;
    }
}
