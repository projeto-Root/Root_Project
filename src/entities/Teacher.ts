import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm'


@Entity('teachers')
export class Teacher {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: 'text' })
	name: string

	@Column({ type: 'text' })
	photo: string

	@Column({ type: 'text' })
	area: string

	@Column({ type: 'text' })
	areaIcon: string

	@Column({ type: 'text' })
	subArea: string

	@Column({ type: 'text' })
	SubAreaIcon: string

	
}
