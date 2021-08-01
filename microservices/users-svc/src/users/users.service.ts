import {Inject, Injectable} from '@nestjs/common';
import {FindOptions} from "sequelize";
import {PinoLogger} from "nestjs-pino";

import {UsersService} from "./users.interface";
import {User} from "./user.entity";
import {UserDto} from "./user.dto";

@Injectable()
export class UsersServiceImpl implements UsersService {

  constructor(
    @Inject('UserRepository') private readonly userRepository: typeof User,
    private readonly logger: PinoLogger
  ) {
    logger.setContext(UsersServiceImpl.name)
  }

  async findAll(query?: FindOptions): Promise<Array<User>> {
    this.logger.info('UserService#findAll.call', query)

    const result: Array<User> = await this.userRepository.findAll(query)
    this.logger.info('UserService#findAll.result', result)

    return result
  }

  async count(query?: FindOptions): Promise<number> {
    this.logger.info('UserService#count.call', query)

    const result: number = await this.userRepository.count(query)
    this.logger.info('UserService#count.result', result)

    return result
  }

  async create(userDto: UserDto): Promise<User> {
    this.logger.info('UserService#create.call', userDto)

    const user = new User(userDto)
    const result = await user.save()
    this.logger.info('UserService#create.result', result)

    return result
  }
}
