import { UsersTypeormRepository } from './typeorm/users.typeorm.repository';

export const usersRepositoryToken = Symbol('UsersRepositoryToken');

export const usersRepositoryProvider = {
    provide: usersRepositoryToken,
    useClass: UsersTypeormRepository,
};
