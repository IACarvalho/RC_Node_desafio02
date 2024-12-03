import { app } from './app'
import { env } from './env'
import 'reflect-metadata'

const port = env?.PORT

app.listen({ port }, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`)
})