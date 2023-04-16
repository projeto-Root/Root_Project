import {
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { UserPost } from './UserPost'

@Entity('users')
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: 'text' })
	name: string

	@Column({ type: 'varchar', unique: true, length:255})
	email: string

	@Column({ type: 'text'})
	password: string

	@OneToMany(() => UserPost, userPost => userPost.user )
    userPosts: UserPost[]
}
