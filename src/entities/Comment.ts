import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn
} from 'typeorm'
import { UserPost } from './UserPost';
import { User } from './User';
@Entity('comments')
export class Comment {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	descricao: string
	@ManyToOne(() => UserPost, post => post.comments)
	post: UserPost;
	@ManyToOne(() => User, user => user.comments)
	user: User;
}
