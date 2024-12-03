import { UUID } from "node:crypto"

export class User{
  id: UUID
  name: string
  username: string
  email: string
  password: string
  created_at: Date
  updated_at: Date
}