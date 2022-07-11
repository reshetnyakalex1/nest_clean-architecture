import { Body, Controller, Get, Logger, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SetRoles } from '../../auth/roles.decorator';
import { Roles } from '../../constants/Roles';
import { JwtAuthGuard, RolesGuard } from '../../auth';
import { LoginDto } from './DTO/Login.dto';
import { LoginDtoToCredentialsMapper } from './mappers/LoginDtoToCredentials.mapper';
import { TokenToLoginResponseMapper } from './mappers/TokenToLoginResponse.mapper';
import { LoginResponseDto } from './DTO/TokenResponse.dto';
import { SignUpDto } from './DTO/SignUp.dto';
import { SignUpDtoToNewUserMapper } from './mappers/SignUpDtoToNewUser.mapper';
import { IdObject } from '../../interfaces';
import { SignUpResponseDto } from './DTO/SignUpResponse.dto';
import { IdObjectToSignUpResponseMapper } from './mappers/IdObjectToSignUpResponse.mapper';

@Controller('/auth')
export class AuthController {
    private readonly logger = new Logger('AuthController');
    constructor(private readonly authService: AuthService) {}

    @Post('/sign-up')
    async signUp(@Body() signUpDto: SignUpDto): Promise<SignUpResponseDto> {
        const signUpDtoToNewUserMapper = new SignUpDtoToNewUserMapper();
        const newUser = signUpDtoToNewUserMapper.map(signUpDto);

        const userId = await this.authService.signUp(newUser);

        const idObjectToSignUpResponseMapper = new IdObjectToSignUpResponseMapper();
        return idObjectToSignUpResponseMapper.map(userId);
    }

    @Post('/auth-check')
    @SetRoles(Roles.USER)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async authVerify(): Promise<void> {
        this.logger.log('auth success');
    }

    @Post(':id')
    async login(@Body() body: LoginDto): Promise<LoginResponseDto> {
        const loginDtoToCredentialsMapper = new LoginDtoToCredentialsMapper();
        const credentials = loginDtoToCredentialsMapper.map(body);

        const token = await this.authService.login(credentials);

        const tokenToLoginResponseMapper = new TokenToLoginResponseMapper();
        return tokenToLoginResponseMapper.map(token);
    }
}
