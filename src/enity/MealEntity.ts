import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { User } from './userEntity'

@Entity({name: 'meal'})
export class Meal {
  @PrimaryColumn('uuid')
  id: string
  @Column('text')
  name: string
  @Column('text')
  description: string
  @Column('date')
  dataAndTime: Date
  @Column('boolean')
  isInDiet: boolean
  @ManyToOne(() => User, user => user.id)
  @JoinColumn({name: 'userId'})
  user: User
  @CreateDateColumn()
  createdAt: Date
  @UpdateDateColumn()
  updatedAt: Date
}