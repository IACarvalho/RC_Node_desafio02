import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { UserService } from "../services/user.service";
import { z } from "zod";


class UserController {
  private userService: UserService

  constructor() {
    this.userService = new UserService()
  }

  async createUser(request: FastifyRequest, reply: FastifyReply) {
    const createUserSchema = z.object({
      name: z.string(),
      username: z.string(),
      email: z.string(),
      password: z.string()
    })

    const { name, username, email, password } = createUserSchema.parse(request.body)

    await this.userService.createUser(name, username, email, password)
    reply.status(201).send()
  }
}

export const userController = new UserController()