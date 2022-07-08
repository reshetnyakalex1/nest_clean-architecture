import { Column, Table, Model, PrimaryKey } from 'sequelize-typescript';
import { IUser } from '../../interfaces/user.interfaces';
import { Roles } from '../../../../constants/Roles';

@Table({
    tableName: 'User',
    createdAt: false,
    updatedAt: false,
})
export class UserModel extends Model implements IUser {
    @PrimaryKey
    @Column
    id: number;

    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    role: Roles;

    isNew(): boolean {
        return Boolean(this.id === 0);
    }
}
