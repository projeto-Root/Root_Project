import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './User';
import { UserPost } from './UserPost';
import { LikeComment } from './LikeComment';


@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column()
    user_id: number;

    @Column()
    userpost_id: number;

    @ManyToOne(() => User, user => user.comment)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => UserPost, userPost => userPost.comment)
    @JoinColumn({ name: 'userpost_id' })
    userPost: UserPost;

    @OneToMany(() => LikeComment, likeComment => likeComment.user)
    likeComment: LikeComment[]

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
