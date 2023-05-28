import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { User } from './User';
import { UserPost } from './UserPost';

@Entity('likes')
export class Like {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    userPost_id: number;

    @ManyToOne(() => User, user => user.likes)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => UserPost, userPost => userPost.likes)
    @JoinColumn({ name: 'userPost_id' })
    userPost: UserPost;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}