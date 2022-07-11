import { NewTest } from '../entities/NewTest';
import { Test } from '../entities/Test';

export interface TestsGatewayInterface {
    create(newTest: NewTest): Promise<number>;
    getByOwner(ownerId: number): Promise<Test[]>;
}
