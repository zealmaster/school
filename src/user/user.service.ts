import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { loginDto } from 'src/dto/login.dto';
import { userDto } from 'src/dto/user.dto';
import { user } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(user)
    private userRepository: Repository<user>,
  ) {}

  signUp(userDto: userDto) {
    return this.userRepository.save(userDto);
  }
 
  // find user by ID for use in 
  findUser(id) {
    return this.userRepository.findOneBy({ id });
  }

  // User login handler without Passport module
  async login(username, loginDto: loginDto) {
    const user = await this.userRepository.findOneBy(username);
    if (user) {
      if (
        loginDto.password === user.password &&
        user.username === loginDto.username
      ) {
        return user.username + ' is a correct user';
      }
      return 'Wrong password';
    }
  }

// find a user from the database by username for authentication using Passport module
  async findOne(username): Promise<user> {
    return await this.userRepository.findOneBy({ username });
  }

  // Query all users
  async fetchUsers(): Promise<user[]> {
    return await this.userRepository.find();
  }
}
