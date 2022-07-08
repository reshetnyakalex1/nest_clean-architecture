import { Body, Controller, Get, Inject, Logger, Param, Post } from '@nestjs/common';
import { userServiceToken } from './users.service.provider';
import { UsersServiceInterface } from './users.service.interface';
import { CreateUserDto } from './DTOs/createUser.dto';
import { UserEntity } from './db/typeorm/user.entity';
import { IdObject } from '../../interfaces';
import { IUserWithTests } from './interfaces/user.interfaces';
import { User } from './entities/User';
import { CreateUserDtoToUserMapper } from './mappers/CreateUserDtoToUserMapper';

@Controller('users')
export class UsersController {
    private readonly logger = new Logger('UserController');
    constructor(
        @Inject(userServiceToken)
        private readonly userService: UsersServiceInterface,
    ) {}

    @Get(':id')
    getById(@Param('id') id: number): Promise<User> {
        return this.userService.getById(id);
    }

    @Get(':id/tests')
    getWithTests(@Param('id') id: number): Promise<IUserWithTests> {
        return this.userService.getWithTests(id);
    }
}
