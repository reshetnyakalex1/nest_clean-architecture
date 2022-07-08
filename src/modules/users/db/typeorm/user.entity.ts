import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TestEntity } from '../../../tests/test.entity';
import { IUser, IUserWithTests } from '../../interfaces/user.interfaces';
import { Roles } from '../../../../constants/Roles';

@Entity({ name: 'User' })
export class UserEntity implements IUser, IUserWithTests {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    role: Roles;

    @OneToMany(() => TestEntity, (test) => test.user) tests: TestEntity[];

    isNew(): boolean {
        return Boolean(this.id === 0);
    }
}
