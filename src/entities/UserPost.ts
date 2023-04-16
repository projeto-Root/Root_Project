import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { User } from './User'

@Entity('userposts')
export class UserPost {
    @PrimaryGeneratedColumn() // Incrementa +1 no id sempre que adiciona um post
    id: number

    @Column({ type: 'text' })
    name: string
    @Column({ type: 'text' })
    description: string

    @Column({ type: 'varchar', unique: true, length: 255 })
    content: string
    @ManyToOne(() => User, user => user.userPosts)
    @JoinColumn({ name: 'user_id' })
    user: User
}
