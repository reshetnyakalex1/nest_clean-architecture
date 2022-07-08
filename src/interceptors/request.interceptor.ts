import { CallHandler, ExecutionContext, NestInterceptor, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';

export class RequestInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> | Promise<Observable<any>> {
        const request = context.switchToHttp().getRequest();
        Logger.log(`Request for ${request.url}`, 'RequestInterceptor');
        return next.handle();
    }
}
