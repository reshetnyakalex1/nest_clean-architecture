import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TestEntity } from '../../../tests/db/test.entity';
import { Roles } from '../../../../constants/Roles';

@Entity({ name: 'User' })
export class UserEntity {
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
}
