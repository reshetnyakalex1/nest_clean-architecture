import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from './user.model';
import { IUser } from '../../interfaces/user.interfaces';

@Injectable()
export class UsersSequelizeRepository {
    constructor(@InjectModel(UserModel) private userModel: typeof UserModel) {}

    create(user: any): Promise<number> {
        return Promise.resolve(0);
    }

    async findOne(id: number): Promise<IUser | null> {
        return this.userModel.findOne({ where: { id }, raw: true });
    }

    findOneWithTests(id: number): Promise<IUser> {
        return Promise.resolve(undefined);
    }
}
