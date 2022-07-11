import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from './user.model';

@Injectable()
export class UsersSequelizeRepository {
    constructor(@InjectModel(UserModel) private userModel: typeof UserModel) {}

    create(user: any): Promise<number> {
        return Promise.resolve(0);
    }

    async findOne(id: number): Promise<UserModel | null> {
        return this.userModel.findOne({ where: { id }, raw: true });
    }
}
