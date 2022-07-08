import { DeepPartial, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersTypeormRepositoryInterface } from './users.typeorm.repository.interface';
import { IUser } from '../../interfaces/user.interfaces';

export class UsersTypeormRepository implements UsersTypeormRepositoryInterface {
    constructor(
        @InjectRepository(UserEntity)
        private readonly usersRepository: Repository<UserEntity>,
    ) {}

    findOne(id: number): Promise<UserEntity> {
        return this.usersRepository.findOne({ where: { id } });
    }

    async create(user: DeepPartial<UserEntity>): Promise<UserEntity> {
        const insertResult = this.usersRepository.create(user);
        return insertResult;
    }

    async insert(user: UserEntity): Promise<number> {
        const insertResult = await this.usersRepository.insert(user);
        return insertResult.raw.insertId;
    }

    async findOneWithTests(id: number): Promise<UserEntity> {
        return this.usersRepository.findOne({ where: { id }, relations: ['tests'] });
    }

    async getAll(): Promise<UserEntity[]> {
        return this.usersRepository.find();
    }

    async getByEmail(email: string): Promise<UserEntity | null> {
        return this.usersRepository.findOne({ where: { email } });
    }
}
