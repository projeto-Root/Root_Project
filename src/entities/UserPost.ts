import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';

@Entity('usersposts')
export class UserPost {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    content: string;

    @Column()
    user_id: number;

    @ManyToOne(() => User, user => user.userPosts)
    @JoinColumn({ name: 'user_id' })
    user: User;
}
