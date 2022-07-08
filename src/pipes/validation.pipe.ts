import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
        if (metadata.metatype) {
            const obj = plainToInstance(metadata.metatype, value);
            const errors = await validate(obj, {
                forbidNonWhitelisted: true,
            });

            if (errors.length) {
                const message = this.convertErrorsToMessage(errors);
                throw new HttpException(message, HttpStatus.BAD_REQUEST);
            }
        }
        return value;
    }
    private convertErrorsToMessage(errors: ValidationError[]): string[] {
        return errors.map((err) => {
            return `${err.property} - ${Object.values(err.constraints).join(', ')}`;
        });
    }
}
