import { UsersGateway } from './typeorm/users.gateway';

export const usersGatewayToken = Symbol('UsersGatewayToken');

export const usersGatewayProvider = {
    provide: usersGatewayToken,
    useClass: UsersGateway,
};
