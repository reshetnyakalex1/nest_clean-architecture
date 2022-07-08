import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestEntity } from './test.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestsRepository {
    constructor(@InjectRepository(TestEntity) private readonly testRepository: Repository<TestEntity>) {}

    getByOwnerId(id: number): Promise<TestEntity[]> {
        return this.testRepository.find({ where: { ownerId: id } });
    }

    async create(test: TestEntity): Promise<number> {
        const insertResult = await this.testRepository.insert(test);
        return insertResult.raw.insertId;
    }
}
