import { DataSource } from 'typeorm'
import { User } from '../enity/user.entity'
import { Meal } from '../enity/meal.enity'


export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [User, Meal],
  subscribers: [],
  migrations: [],
})