import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm'


@Entity('teachers')
export class Teacher {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
	photo: string

	@Column()
	area: string

	@Column()
	areaIcon: string

	@Column()
	subArea: string

	@Column()
	SubAreaIcon: string
	
}
