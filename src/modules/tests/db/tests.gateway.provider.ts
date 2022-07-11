import { TestsGateway } from './tests.gateway';

export const testsGatewayToken = Symbol('TestsGateway');

export const testsGatewayProvider = {
    provide: testsGatewayToken,
    useClass: TestsGateway,
};
