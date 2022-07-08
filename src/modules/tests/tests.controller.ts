import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateTestDto } from './DTOs/CreateTest.dto';
import { TestEntity } from './test.entity';
import { TestsFactory } from './tests.factory';
import { testsServiceToken } from './tests.service.provider';
import { TestsServiceInterface } from './tests.service.interface';

@Controller('tests')
export class TestsController {
    constructor(
        private readonly testsFactory: TestsFactory,
        @Inject(testsServiceToken) private readonly testsService: TestsServiceInterface,
    ) {}

    @Post()
    createTest(@Body() testDto: CreateTestDto): Promise<number> {
        const test = this.testsFactory.createTest(testDto);
        return this.testsService.create(test);
    }
}
