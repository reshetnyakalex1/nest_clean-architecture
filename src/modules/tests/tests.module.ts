import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestEntity } from './db/test.entity';
import { testsServiceProvider } from './tests.service.provider';
import { TestsService } from './tests.service';
import { TestsRepository } from './db/tests.repository';
import { TestsController } from './tests.controller';
import { testsRepositoryProvider } from './db/tests.repository.provider';
import { testsGatewayProvider } from './db/tests.gateway.provider';
import { TestsGateway } from './db/tests.gateway';

@Module({
    imports: [TypeOrmModule.forFeature([TestEntity])],
    controllers: [TestsController],
    providers: [
        testsServiceProvider,
        TestsService,
        testsRepositoryProvider,
        TestsRepository,
        testsGatewayProvider,
        TestsGateway,
    ],
    exports: [testsServiceProvider, TestsService],
})
export class TestsModule {}
