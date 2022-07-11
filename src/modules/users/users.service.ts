import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UsersServiceInterface } from './users.service.interface';
import { IdObject } from '../../interfaces';
import { testsServiceToken } from '../tests/tests.service.provider';
import { TestsServiceInterface } from '../tests/tests.service.interface';
import { User } from './entities/User';
import { UsersGatewayInterface } from './db/users.gateway.interface';
import { usersGatewayToken } from './db/users.gateway.provider';
import { NewUser } from './entities/NewUser';
import { UserWithTests } from './entities/UserWithTests';

@Injectable()
export class UsersService implements UsersServiceInterface {
    constructor(
        @Inject(testsServiceToken) private readonly testsService: TestsServiceInterface,
        @Inject(usersGatewayToken) private readonly usersGateway: UsersGatewayInterface,
    ) {}

    async getById(id: number): Promise<User> {
        const user = await this.usersGateway.findOne(id);
        if (!user) {
            throw new NotFoundException("User wasn't found.");
        }
        return user;
    }

    async createUser(user: NewUser): Promise<IdObject> {
        const id = await this.usersGateway.create(user);
        return { id };
    }

    async getWithTests(id: number): Promise<UserWithTests> {
        const user = await this.usersGateway.findOneWithTests(id);
        if (user === null) {
            throw new NotFoundException("User doesn't exist");
        }
        return user;
    }

    async getAllUsers(id: number): Promise<User[]> {
        return this.usersGateway.getAll();
    }

    async getByEmail(email: string): Promise<User | null> {
        return this.usersGateway.getByEmail(email);
    }

    async doesUserWithEmailExist(email: string): Promise<boolean> {
        const user = await this.getByEmail(email);

        return Boolean(user);
    }
}
