import { Injectable, LoggerService } from '@nestjs/common';
import { pino } from 'pino';
import pretty from 'pino-pretty';
import { AsyncStorageService } from '../async-storage/async-storage.service';

const pinoLogger = pino(pretty());

@Injectable()
export class PinoLoggerService implements LoggerService {
    constructor(private readonly asyncStorageService: AsyncStorageService) {}

    error(message: any, trace?: string, context?: string): void {
        const traceId = this.asyncStorageService.getTraceId();
        pinoLogger.error({ traceId }, this.getMessage(message, context));
        if (trace) {
            pinoLogger.error(trace);
        }
    }

    log(message: any, context?: string): void {
        const traceId = this.asyncStorageService.getTraceId();
        if (traceId) {
            return pinoLogger.info({ traceId }, this.getMessage(message, context));
        }
        return pinoLogger.info(this.getMessage(message, context));
    }

    warn(message: any, context?: string): void {
        const traceId = this.asyncStorageService.getTraceId();
        if (traceId) {
            return pinoLogger.info({ traceId }, this.getMessage(message, context));
        }
        return pinoLogger.info(this.getMessage(message, context));
    }

    private getMessage(message: any, context?: string) {
        return context ? `[${context}] ${message}` : `${message}`;
    }
}
