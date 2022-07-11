import { IdObject } from '../../../interfaces';
import { SignUpResponseDto } from '../DTO/SignUpResponse.dto';
import { plainToInstance } from 'class-transformer';

export class IdObjectToSignUpResponseMapper {
    map(idObject: IdObject): SignUpResponseDto {
        return plainToInstance(SignUpResponseDto, idObject);
    }
}
