import { Injectable } from '@nestjs/common';

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
}
