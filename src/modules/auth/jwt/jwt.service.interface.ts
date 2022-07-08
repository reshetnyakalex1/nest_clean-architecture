import { JwtSignOptions, JwtVerifyOptions } from '@nestjs/jwt/dist/interfaces';

export interface JwtServiceInterface {
    sign(payload: string | Buffer | object, options?: JwtSignOptions): string;
    signAsync(payload: string | Buffer | object, options?: JwtSignOptions): Promise<string>;
    verify<T extends object = any>(token: string, options?: JwtVerifyOptions): T;
}
