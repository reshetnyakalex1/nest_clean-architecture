import { NewTest } from './entities/NewTest';
import { Test } from './entities/Test';
import { IdObject } from '../../interfaces';

export interface TestsServiceInterface {
    getByOwner(id: number): Promise<Test[]>;
    create(test: NewTest): Promise<IdObject>;
}
