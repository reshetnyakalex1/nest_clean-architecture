import { UserEntity } from '../db/typeorm/user.entity';
import { UserWithTests } from '../entities/UserWithTests';
import { plainToInstance } from 'class-transformer';

export class UserEntityToUserWithTestsMapper {
    map(userEntity: UserEntity): UserWithTests {
        return plainToInstance(UserWithTests, userEntity);
    }
}
