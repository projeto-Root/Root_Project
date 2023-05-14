import {
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { UserPost } from './UserPost'


@Entity('admins')
export class Admin {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column({ type: 'varchar', unique: true, length: 255 })
	email: string

	@Column()
	password: string

	@OneToMany(() => UserPost, userPost => userPost.user )
	 userPosts: UserPost[]

	
}