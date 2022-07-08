import { Inject, Injectable, Logger } from '@nestjs/common';
import { User } from '../../entities/User';
import { usersRepositoryToken } from '../users.repository.provider';
import { UsersTypeormRepositoryInterface } from './users.typeorm.repository.interface';
import { UsersGatewayInterface } from '../users.gateway.interface';
import { UserEntityToUserMapper } from '../../mappers/UserEntityToUserMapper';
import { NewUser } from '../../entities/NewUser';

@Injectable()
export class UsersGateway implements UsersGatewayInterface {
    private readonly logger = new Logger('UsersGateway');
    constructor(@Inject(usersRepositoryToken) private readonly usersRepository: UsersTypeormRepositoryInterface) {}

    async findOne(id: number): Promise<User | null> {
        const userDBEntity = await this.usersRepository.findOne(id);
        const userEntityToUserMapper = new UserEntityToUserMapper();
        return userEntityToUserMapper.map(userDBEntity);
    }

    async create(user: NewUser): Promise<number> {
        const { firstName, lastName, hashedPassword, email, role } = user;
        const userDBEntity = await this.usersRepository.create({
            firstName,
            lastName,
            password: hashedPassword,
            email,
            role,
        });
        return this.usersRepository.insert(userDBEntity);
    }

    async findOneWithTests(id: number): Promise<User> {
        const userDBEntity = await this.usersRepository.findOne(id);
        const userEntityToUserMapper = new UserEntityToUserMapper();
        return userEntityToUserMapper.map(userDBEntity);
    }

    async getAll(): Promise<User[]> {
        const usersDBEntities = await this.usersRepository.getAll();
        const userEntityToUserMapper = new UserEntityToUserMapper();
        return userEntityToUserMapper.map(usersDBEntities);
    }

    async getByEmail(email: string): Promise<User | null> {
        const user = await this.usersRepository.getByEmail(email);
        if (user === null) return user;
        const userEntityToUserMapper = new UserEntityToUserMapper();
        return userEntityToUserMapper.map(user);
    }
}
