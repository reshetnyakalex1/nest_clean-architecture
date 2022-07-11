import { TestsRepository } from './tests.repository';

export const testsRepositoryToken = Symbol('TestRepository');

export const testsRepositoryProvider = {
    provide: testsRepositoryToken,
    useClass: TestsRepository,
};
