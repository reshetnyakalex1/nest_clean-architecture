import { TestEntity } from '../db/test.entity';
import { Test } from '../entities/Test';
import { plainToInstance } from 'class-transformer';

export class TestEntityToTestMapper {
    map(test: TestEntity): Test;
    map(tests: TestEntity[]): Test[];

    map(test: unknown): unknown {
        return plainToInstance(Test, test);
    }
}
