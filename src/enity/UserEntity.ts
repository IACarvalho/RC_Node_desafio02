import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'user'})
export class User {
  @PrimaryColumn('uuid')
  id: string
  @Column('text')
  name: string
  @Column('text')
  username: string
  @Column('text')
  email: string
  @Column('text')
  password: string
  @CreateDateColumn()
  created_at: Date
  @UpdateDateColumn()
  updated_at: Date
}