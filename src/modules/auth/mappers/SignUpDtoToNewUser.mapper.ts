import { SignUpDto } from '../DTO/SignUp.dto';
import { NewUser } from '../../users/entities/NewUser';

export class SignUpDtoToNewUserMapper {
    map(signUpDto: SignUpDto): NewUser {
        const { firstName, lastName, passwordRepeat, password, email } = signUpDto;
        return new NewUser({ firstName, email, passwordRepeat, password, lastName });
    }
}
