import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
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

	@CreateDateColumn()
	createdAt: Date;
  
	@UpdateDateColumn()
	updatedAt: Date;
  }


