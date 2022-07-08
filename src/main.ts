import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { PinoLoggerService } from './logger/logger.service';
import { v4 as uuid } from 'uuid';
import { AllExceptionsFilter } from './filters/exception.filter';
import * as bodyParser from 'body-parser';
import { AsyncStorageService } from './async-storage/async-storage.service';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import { RequestInterceptor } from './interceptors/request.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        bodyParser: false,
    });

    app.use(helmet());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());

    app.use((req, res, next) => {
        const traceId = req.headers['x-request-id'] || uuid();
        const asyncStorageService = app.get(AsyncStorageService);
        const asyncStorage = asyncStorageService.getAsyncStorage();
        asyncStorage.run(AsyncStorageService.getInitialStore(), () => {
            asyncStorageService.setTraceId(traceId);
            next();
        });
    });

    app.useLogger(app.get(PinoLoggerService));
    app.useGlobalInterceptors(new RequestInterceptor(), new TransformInterceptor());
    const httpAdapter = app.get(HttpAdapterHost);
    app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
        .setTitle('Nest template swagger')
        .setDescription('The REST API nest template')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    const port = process.env.APP_PORT || 3000;
    await app.listen(port);
}
bootstrap();
