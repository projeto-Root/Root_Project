import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Index } from 'typeorm';
import { User } from './User';
import { UserPost } from './UserPost';

@Entity()
@Index(['user', 'userPost'], { unique: true })
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.likes)
  @Column()
  userId: number;

  @ManyToOne(() => UserPost, (userPost) => userPost.likes)
  @Column()
  userPostId: number;
}
