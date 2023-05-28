import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './User';
import { Like } from './Like';

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

    @OneToMany(() => Like, like => like.userPost)
    likes: Like[]

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
