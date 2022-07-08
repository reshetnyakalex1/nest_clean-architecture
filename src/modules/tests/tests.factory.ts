import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './DTOs/CreateTest.dto';
import { TestEntity } from './test.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class TestsFactory {
    createTest(createTestDto: CreateTestDto): TestEntity {
        return plainToInstance(TestEntity, createTestDto);
    }
}
