import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { loginDto } from 'src/dto/login.dto';
import { userDto } from 'src/dto/user.dto';
import { user } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(user)
    private userRepository: Repository<user>,
  ) {}

  async signUp(userDto: userDto) {
    const passwordHash = await bcrypt.hash(userDto.password, 10);
    const newUser = {
      password: passwordHash,
      username: userDto.username,
      email: userDto.email,
    };
    return this.userRepository.save(newUser);
  }

  // find user by ID for use in
  findUser(id) {
    return this.userRepository.findOneBy({ id });
  }

  // User login handler without Passport module
  async login(username: string, loginDto: loginDto) {
    const user = await this.userRepository.findOneBy({ username: loginDto.username });
    if (!user) {
      return 'Incorrect username';
    }
    const isMatch = await bcrypt.compare(loginDto.password, user.password);
    if (user && isMatch) {
      return user.username + ' is a correct user';
    }
    return 'password incorrect';
  }

  // find a user from the database by username for authentication using Passport module
  async findOne(username): Promise<any | undefined> {
    return await this.userRepository.findOneBy({ username });
  }

  // Query all users
  async fetchUsers(): Promise<user[]> {
    return await this.userRepository.find();
  }
}
