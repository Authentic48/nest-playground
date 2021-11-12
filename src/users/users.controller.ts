import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @ApiOkResponse({ type: User, isArray: true })
  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }
  @ApiOkResponse({ type: User })
  @Get(':id')
  getUserById(@Param('id') id: string): User {
    return this.userService.getUserById(Number(id));
  }
  @ApiCreatedResponse({ type: User })
  @Post()
  CreateUser(@Body() body: CreateUserDto): any {
    return this.userService.createUser(body);
  }
}
