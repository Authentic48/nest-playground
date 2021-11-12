import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
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

  @Post()
  CreateUser(@Body() body: CreateUserDto): any {
    return this.userService.createUser(body);
  }
}
