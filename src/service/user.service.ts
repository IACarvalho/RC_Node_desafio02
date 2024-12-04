import { Service } from 'fastify-decorators'
import { Repository } from 'typeorm'
import { User } from '../enity/user.entity'
import { AppDataSource } from '../database'
import { randomUUID } from 'node:crypto'

@Service()
export class UserService {
    private userRepository: Repository<User>

    constructor() {
        this.userRepository = AppDataSource.getRepository(User)
    }

    async createUser(name: string, username: string, email: string, password: string): Promise<void> {
        const user = this.userRepository.create({
            id: randomUUID(),
            name,
            username,
            email,
            password
        })

        await this.userRepository.save(user)
    }
    
}