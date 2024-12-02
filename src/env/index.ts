import { config } from 'dotenv'
import { z } from 'zod'

if(process.env.NODE_ENV === 'test'){
  config({ path: '.env.test' })
} else {
  config()
}

const envSchema = z.object({
  NODE_ENV: z.string().default('production'),
  DATABASE_URL: z.string(),
  PORT: z.coerce.number().default(3000),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('⚠️ Invalid environment variables: ', _env.error)
}

export const env = _env.data