import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm'


@Entity('bugados')
export class bugados {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: 'varchar' })
	name: string

	@Column({ type: 'varchar' })
	position: string

	@Column({ type: 'text'})
	photo: string

}