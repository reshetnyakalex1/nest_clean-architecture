import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class SignUpDto {
    @IsString()
    @MinLength(1)
    @MaxLength(60)
    firstName: string;

    @IsString()
    @MinLength(1)
    @MaxLength(60)
    lastName: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(5)
    @MaxLength(36)
    password: string;

    @IsString()
    @MaxLength(36)
    @MinLength(6)
    passwordRepeat: string;
}
