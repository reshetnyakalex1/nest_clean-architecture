import { Roles } from '../../../constants/Roles';

export type NewUserOptions = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordRepeat: string;
    role?: Roles;
};

export class NewUser {
    constructor(userOptions: NewUserOptions) {
        const { firstName, lastName, passwordRepeat, password, email } = userOptions;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.passwordRepeat = passwordRepeat;
        this.email = email;
        this.role = userOptions.role || Roles.USER;
    }

    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordRepeat: string;
    hashedPassword: string;
    role: Roles;

    doPasswordsMatch() {
        return Boolean(this.passwordRepeat === this.password);
    }

    getPassword() {
        return this.password;
    }

    setHashedPassword(hashedPassword: string) {
        return (this.hashedPassword = hashedPassword);
    }

    getHashedPassword() {
        return this.hashedPassword;
    }

    getEmail() {
        return this.email;
    }
}
