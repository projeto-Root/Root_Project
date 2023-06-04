import { Entity, 
         PrimaryGeneratedColumn,
         Column,
         ManyToOne,
         JoinColumn,
         UpdateDateColumn,
         CreateDateColumn 
} from 'typeorm';

import { User } from './User';
import { Comment } from './Comment';

@Entity('likeComment')
export class LikeComment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    comment_id: number;

    @ManyToOne(() => User, user => user.likeComment)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Comment, Comment => Comment.likeComment)
    @JoinColumn({ name: 'comment_id' })
    comment: Comment;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}