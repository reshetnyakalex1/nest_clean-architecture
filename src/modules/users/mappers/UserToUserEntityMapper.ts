import { User } from '../entities/User';
import { plainToInstance } from 'class-transformer';
import { UserEntity } from '../db/typeorm/user.entity';

export class UserToUserEntityMapper {
    map(user: User) {
        return plainToInstance(UserEntity, user);
    }
}
