import { knex as knexFile, Knex } from 'knex'
import { env } from '../env'


if (!env?.DATABASE_URL) {
  throw new Error(' ⚠️ DATABASE_URL not found in environment variables')
}

export const config: Knex.Config = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: {
    extension: 'ts',
    directory: './src/database/migrations',
  }
}

export const knex = knexFile(config)