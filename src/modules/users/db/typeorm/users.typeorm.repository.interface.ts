import { UserEntity } from './user.entity';
import { DeepPartial } from 'typeorm';

export interface UsersTypeormRepositoryInterface {
    findOne(id: number): Promise<UserEntity | null>;

    create(user: DeepPartial<UserEntity>): Promise<UserEntity>;

    findOneWithTests(id: number): Promise<UserEntity | null>;

    getAll(): Promise<UserEntity[]>;

    getByEmail(email: string): Promise<UserEntity | null>;

    insert(user: UserEntity): Promise<number>;
}
