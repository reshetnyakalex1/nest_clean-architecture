import { UserEntity } from '../db/typeorm/user.entity';
import { plainToInstance } from 'class-transformer';
import { User } from '../entities/User';

export class UserEntityToUserMapper {
    map(userEntity: UserEntity[]): User[];
    map(userEntity: UserEntity): User;

    map(userEntity: unknown): unknown {
        return plainToInstance(User, userEntity);
    }
}
