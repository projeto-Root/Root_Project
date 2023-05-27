import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm'


@Entity('calicards')
export class CaliCard {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
	position: string

	@Column()
	photo: string

}
