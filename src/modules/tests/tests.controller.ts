import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateTestDto } from './DTOs/CreateTest.dto';
import { testsServiceToken } from './tests.service.provider';
import { TestsServiceInterface } from './tests.service.interface';
import { CreateTestDtoToNewTestMapper } from './mappers/CreateTestDtoToNewTest.mapper';
import { IdObject } from '../../interfaces';

@Controller('tests')
export class TestsController {
    constructor(@Inject(testsServiceToken) private readonly testsService: TestsServiceInterface) {}

    @Post()
    createTest(@Body() testDto: CreateTestDto): Promise<IdObject> {
        const createTestDtoToNewTestMapper = new CreateTestDtoToNewTestMapper();
        const newTest = createTestDtoToNewTestMapper.map(testDto);
        return this.testsService.create(newTest);
    }
}
