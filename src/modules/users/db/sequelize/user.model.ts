import { Column, Table, Model, PrimaryKey } from 'sequelize-typescript';
import { Roles } from '../../../../constants/Roles';

@Table({
    tableName: 'User',
    createdAt: false,
    updatedAt: false,
})
export class UserModel extends Model {
    @PrimaryKey
    @Column
    id: number;

    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    role: Roles;
}
