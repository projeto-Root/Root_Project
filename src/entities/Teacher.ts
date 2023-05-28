import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
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

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;


}
