import { IsInt, IsNumber, IsPositive, IsString, Length } from 'class-validator';

export class CreateTestDto {
    @IsString()
    @Length(1, 60)
    name: string;

    @IsNumber()
    @IsPositive()
    @IsInt()
    ownerId: number;
}
