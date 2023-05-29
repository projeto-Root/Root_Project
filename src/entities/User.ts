import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
import { UserPost } from './UserPost'
import { Like } from './Like'
import { Comment } from './Comment'


@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ type: 'varchar', unique: true, length: 255 })
    email: string

    @Column()
    password: string

    @OneToMany(() => UserPost, userPost => userPost.user)
    userPosts: UserPost[]

    @OneToMany(() => Like, like => like.user)
    likes: Like[]

    @OneToMany(() => Comment, comment => comment.user)
    comment: Comment[]

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}