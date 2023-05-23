import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';
import { UserPost } from './UserPost';

@Entity('likes')
export class Like {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    like: number;

    @Column()
    user_id: number;

    @Column()
    userPost_id: number;

    @ManyToOne(() => User, user => user.likes)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => User, userPost => userPost.likes)
    @JoinColumn({ name: 'userPost_id' })
    userPost: UserPost;
}