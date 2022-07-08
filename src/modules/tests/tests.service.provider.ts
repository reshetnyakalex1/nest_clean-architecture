import { TestsService } from './tests.service';

export const testsServiceToken = Symbol('TestsService');

export const testsServiceProvider = {
    provide: testsServiceToken,
    useClass: TestsService,
};
