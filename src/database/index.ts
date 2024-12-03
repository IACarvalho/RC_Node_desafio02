import { DataSource } from 'typeorm'
import { User } from '../enity/userEntity'
import { Meal } from '../enity/MealEntity'


export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [User, Meal],
  subscribers: [],
  migrations: [],
})