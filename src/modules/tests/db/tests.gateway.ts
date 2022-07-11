import { TestsGatewayInterface } from './tests.gateway.interface';
import { NewTest } from '../entities/NewTest';
import { Inject } from '@nestjs/common';
import { testsRepositoryToken } from './tests.repository.provider';
import { TestsRepositoryInterface } from './tests.repository.interface';
import { Test } from '../entities/Test';
import { TestEntityToTestMapper } from '../mappers/TestEntityToTest.mapper';

export class TestsGateway implements TestsGatewayInterface {
    constructor(@Inject(testsRepositoryToken) private readonly testsRepository: TestsRepositoryInterface) {}

    create(newTest: NewTest): Promise<number> {
        const testEntity = this.testsRepository.create({
            name: newTest.name,
            ownerId: newTest.ownerId,
        });

        return this.testsRepository.insert(testEntity);
    }

    async getByOwner(ownerId: number): Promise<Test[]> {
        const testsEntities = await this.testsRepository.getByOwner(ownerId);
        const testEntityToTestMapper = new TestEntityToTestMapper();
        return testEntityToTestMapper.map(testsEntities);
    }
}
