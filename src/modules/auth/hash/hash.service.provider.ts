import { HashService } from './hash.service';

export const hashServiceToken = Symbol('HashService');

export const hashServiceProvider = {
    provide: hashServiceToken,
    useClass: HashService,
};
