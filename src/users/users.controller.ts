import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getUsers(): any {
    return this.userService.getUsers();
  }
  @Get(':id')
  getUserById(@Param('id') id: string): any {
    return this.userService.getUserById(Number(id));
  }
}
