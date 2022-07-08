import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
    Logger,
    BadRequestException,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { HttpExceptionResponseInterface } from '../interfaces/http-exception-response.interface';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: any, host: ArgumentsHost): void {
        const { httpAdapter } = this.httpAdapterHost;

        const ctx = host.switchToHttp();

        let httpStatus: number = HttpStatus.INTERNAL_SERVER_ERROR;
        let message: string = exception?.message;

        if (exception instanceof HttpException) {
            const response = exception.getResponse() as HttpExceptionResponseInterface;

            httpStatus = exception.getStatus();
            if (exception instanceof BadRequestException) {
                message = this.formatValidationErrorMessage(response.message);
            }
        }

        const responseBody = {
            statusCode: httpStatus,
            timestamp: new Date().toISOString(),
            path: httpAdapter.getRequestUrl(ctx.getRequest()),
            message,
        };

        Logger.error(message, exception?.stack, exception?.context);

        httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
    }

    private formatValidationErrorMessage(message: Array<string> | string): string {
        if (Array.isArray(message)) {
            return message.join(', ');
        }
        return message;
    }
}
