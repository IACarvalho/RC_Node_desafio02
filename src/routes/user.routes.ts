import { FastifyInstance } from "fastify";
import { userController } from "../controllers/user.controller";


export async function userRoutes(app: FastifyInstance) {
  app.post('/',
    {
      schema: {
        description: 'Create a new user with a name, username, password and email',
        tags: ['user'],
        body: {
          type: 'object',
          required: ['name', 'email'],
          properties: {
            name: { type: 'string' },
            username: { type: 'string' },
            password: { type: 'string' },
            email: { type: 'string' }
          }
        },
        response: {
          200: {
            type: 'null',
          }
        }
      }
    }, userController.createUser.bind(userController))
}