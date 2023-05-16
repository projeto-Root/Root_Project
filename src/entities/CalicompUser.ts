import {Entity, Column, PrimaryGeneratedColumn,} from 'typeorm'

@Entity('CalicompUsers')
export class CalicompUser{
    @PrimaryGeneratedColumn()
    id: number
    @Column({type: 'text'})
    name: string
    @Column({type: 'text'})
    Linkphoto: string  
}