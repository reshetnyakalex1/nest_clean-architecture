import { UsersService } from './users.service';

export const userServiceToken = Symbol('UserService');

export const userServiceProvider = {
    provide: userServiceToken,
    useClass: UsersService,
};
