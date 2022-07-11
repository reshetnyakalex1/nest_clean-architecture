import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../../users/db/typeorm/user.entity';

@Entity({ name: 'Test' })
export class TestEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    ownerId: number;

    @ManyToOne((type) => UserEntity, (user) => user.tests)
    @JoinColumn({ name: 'ownerId' })
    user: UserEntity;
}
