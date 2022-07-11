import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestEntity } from './test.entity';
import { DeepPartial, Repository } from 'typeorm';
import { TestsRepositoryInterface } from './tests.repository.interface';

@Injectable()
export class TestsRepository implements TestsRepositoryInterface {
    constructor(@InjectRepository(TestEntity) private readonly testRepository: Repository<TestEntity>) {}

    create(test: DeepPartial<TestEntity>): TestEntity {
        return this.testRepository.create(test);
    }

    getByOwner(id: number): Promise<TestEntity[]> {
        return this.testRepository.find({ where: { ownerId: id } });
    }

    async insert(test: TestEntity): Promise<number> {
        const insertResult = await this.testRepository.insert(test);
        return insertResult.raw.insertId;
    }
}
