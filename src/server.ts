import { app } from './app'
import { env } from './env'
import 'reflect-metadata'
import { AppDataSource } from './database'

const port = env?.PORT
AppDataSource.initialize().catch(console.error)


app.listen({ port }, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`)
})