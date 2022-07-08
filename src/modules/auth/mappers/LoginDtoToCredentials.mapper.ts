import { Credentials } from '../entities/Credentials';
import { LoginDto } from '../DTO/Login.dto';
import { plainToInstance } from 'class-transformer';

export class LoginDtoToCredentialsMapper {
    map(loginDto: LoginDto): Credentials {
        return plainToInstance(Credentials, loginDto);
    }
}
