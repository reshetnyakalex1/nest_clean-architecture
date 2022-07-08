import { AuthService } from './auth.service';

export const authServiceToken = Symbol('AuthService');

export const authServiceProvider = {
    provide: authServiceToken,
    useClass: AuthService,
};
