import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: any = [
    {
      id: 0,
      name: 'Maruis',
    },
    {
      id: 1,
      name: 'Ibrahim',
    },
    {
      id: 2,
      name: 'Muhammad',
    },
  ];

  getUsers(): any {
    return this.users;
  }

  getUserById(userId: number): any {
    return this.users.find((user) => user.id === userId);
  }

  createUser(createUserDto: CreateUserDto) {
    const newUser = {
      id: Date.now(),
      ...CreateUserDto,
    };

    return newUser;
  }
}
