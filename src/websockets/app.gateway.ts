import { ConnectedSocket, OnGatewayInit, SubscribeMessage, WebSocketGateway, WsResponse } from '@nestjs/websockets';
import { Inject, Logger } from '@nestjs/common';
import { userServiceToken } from '../modules/users/users.service.provider';
import { UsersServiceInterface } from '../modules/users/users.service.interface';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class AppGateway implements OnGatewayInit {
    private readonly logger = new Logger('AppGateway');
    constructor(@Inject(userServiceToken) private readonly userService: UsersServiceInterface) {}

    afterInit(server: any): void {
        this.logger.log('Initialized');
    }

    @SubscribeMessage('get-users')
    userCreated(@ConnectedSocket() client: Socket): WsResponse<string> {
        return { event: 'hello', data: 'hello' };
    }
}
