import { Inject, Injectable } from '@nestjs/common';
import { TestsServiceInterface } from './tests.service.interface';
import { testsGatewayToken } from './db/tests.gateway.provider';
import { TestsGatewayInterface } from './db/tests.gateway.interface';
import { NewTest } from './entities/NewTest';
import { IdObject } from '../../interfaces';
import { Test } from './entities/Test';

@Injectable()
export class TestsService implements TestsServiceInterface {
    constructor(@Inject(testsGatewayToken) private readonly testsGateway: TestsGatewayInterface) {}

    async getByOwner(id: number): Promise<Test[]> {
        return this.testsGateway.getByOwner(id);
    }

    async create(test: NewTest): Promise<IdObject> {
        const testId = await this.testsGateway.create(test);
        return {
            id: testId,
        };
    }
}
