import { IsString, Length } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @Length(1, 60)
    firstName: string;

    @IsString()
    @Length(1, 60)
    lastName: string;
}
