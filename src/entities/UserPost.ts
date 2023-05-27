import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from 'typeorm';
import { User } from './User';
import { Comment } from './Comment';
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
    @OneToMany(() => Comment, comment => comment.post)
    comments: Comment[];
}
