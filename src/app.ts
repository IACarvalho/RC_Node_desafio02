import fastify from 'fastify'
import { userController } from './controllers/user.controller'

export const app = fastify()
app.register(userController.routes.bind(userController))
