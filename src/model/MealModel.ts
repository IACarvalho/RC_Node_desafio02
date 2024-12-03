import { UUID } from "node:crypto"

export class Meal{
  id: UUID
  name: string
  description: string
  dataAndTime: Date
  isInDiet: boolean
  userId: UUID
  createdAt: Date
  updatedAt: Date
}