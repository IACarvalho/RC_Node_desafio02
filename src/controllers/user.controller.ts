import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { UserService } from "../service/user.service";
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

  routes(app: FastifyInstance, options: any, done: () => void) {
    app.post('/users', this.createUser.bind(this))
    done()
  }
}

export const userController = new UserController()