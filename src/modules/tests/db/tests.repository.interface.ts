import { TestEntity } from './test.entity';
import { DeepPartial } from 'typeorm';

export interface TestsRepositoryInterface {
    create(test: DeepPartial<TestEntity>): TestEntity;

    getByOwner(ownerId: number): Promise<TestEntity[]>;

    insert(test: TestEntity): Promise<number>;
}
