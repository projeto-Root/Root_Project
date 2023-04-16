import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm'


@Entity('admins')
export class Admin {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: 'text' })
	name: string

	@Column({ type: 'text', unique: true })
	email: string

	@Column({ type: 'text'})
	password: string

	
}
