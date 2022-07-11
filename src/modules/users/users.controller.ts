import { Controller, Get, Inject, Logger, Param } from '@nestjs/common';
import { userServiceToken } from './users.service.provider';
import { UsersServiceInterface } from './users.service.interface';
import { User } from './entities/User';
import { UserWithTests } from './entities/UserWithTests';

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
    getWithTests(@Param('id') id: number): Promise<UserWithTests> {
        return this.userService.getWithTests(id);
    }
}
