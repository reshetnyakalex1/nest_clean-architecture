import { CreateTestDto } from '../DTOs/CreateTest.dto';
import { NewTest } from '../entities/NewTest';
import { plainToInstance } from 'class-transformer';

export class CreateTestDtoToNewTestMapper {
    map(createTestDto: CreateTestDto): NewTest {
        return plainToInstance(NewTest, createTestDto);
    }
}
