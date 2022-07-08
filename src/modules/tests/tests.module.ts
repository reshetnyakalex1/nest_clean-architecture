import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestEntity } from './test.entity';
import { testsServiceProvider } from './tests.service.provider';
import { TestsService } from './tests.service';
import { TestsRepository } from './tests.repository';
import { TestsFactory } from './tests.factory';
import { TestsController } from './tests.controller';

@Module({
    imports: [TypeOrmModule.forFeature([TestEntity])],
    controllers: [TestsController],
    providers: [testsServiceProvider, TestsService, TestsRepository, TestsFactory],
    exports: [testsServiceProvider],
})
export class TestsModule {}
