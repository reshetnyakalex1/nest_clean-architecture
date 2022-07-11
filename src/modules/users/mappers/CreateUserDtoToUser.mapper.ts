import { CreateUserDto } from '../DTOs/createUser.dto';
import { plainToInstance } from 'class-transformer';
import { User } from '../entities/User';

export class CreateUserDtoToUserMapper {
    map(createUserDto: CreateUserDto) {
        return plainToInstance(User, createUserDto);
    }
}
