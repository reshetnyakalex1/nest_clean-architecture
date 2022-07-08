import { Token } from '../entities/Token';
import { LoginResponseDto } from '../DTO/TokenResponse.dto';
import { plainToInstance } from 'class-transformer';

export class TokenToLoginResponseMapper {
    map(token: Token): LoginResponseDto {
        return plainToInstance(LoginResponseDto, token);
    }
}
