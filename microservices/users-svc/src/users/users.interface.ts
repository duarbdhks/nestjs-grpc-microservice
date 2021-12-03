import {User} from "./user.entity";
import {FindOptions} from "sequelize";
import {UserDto} from "./user.dto";

export interface UserServiceQueryResult {
  data: Array<User>
}

export interface UsersService {
  findAll(query?: FindOptions): Promise<Array<User>>
  count(query?: FindOptions): Promise<number>
  create(user: UserDto): Promise<User>
}
