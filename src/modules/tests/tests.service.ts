import { Injectable } from '@nestjs/common';
import { TestsRepository } from './tests.repository';
import { TestEntity } from './test.entity';
import { TestsServiceInterface } from './tests.service.interface';

@Injectable()
export class TestsService implements TestsServiceInterface {
    constructor(private readonly testsRepository: TestsRepository) {}

    async getByOwner(id: number): Promise<TestEntity[]> {
        return this.testsRepository.getByOwnerId(id);
    }

    async create(test: TestEntity): Promise<number> {
        return this.testsRepository.create(test);
    }
}
