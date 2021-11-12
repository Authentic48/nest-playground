import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { NotFoundError } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @ApiOkResponse({ type: User, isArray: true })
  @ApiQuery({ name: 'name', required: false })
  @Get()
  getUsers(@Query('name') name: string): User[] {
    return this.userService.getUsers(name);
  }
  @ApiOkResponse({ type: User })
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number): User {
    const user = this.userService.getUserById(id);

    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse()
  @Post()
  CreateUser(@Body() body: CreateUserDto): any {
    return this.userService.createUser(body);
  }
}
