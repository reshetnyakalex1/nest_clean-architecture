import { TestEntity } from './test.entity';

export interface TestsServiceInterface {
    getByOwner(id: number): Promise<TestEntity[]>;
    create(test: TestEntity): Promise<number>;
}
