import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/CreateUserDto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getUser() {
    return this.userService.fetchUser();
  }

  @Get('allposts')
  getUserPost() {
    return [
      {
        username: 'Ahmed',
        email: 'ahmedali123@gmail.com',
        posts: [
          {
            id: 1,
            title: 'muree tour',
          },
          {
            id: 2,
            title: 'lahore tour',
          },
          {
            id: 3,
            title: 'karachi tour',
          },
        ],
      },
    ];
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: createUserDto) {
    console.log(userData);
    this.userService.createUser(userData);
    return this.userService.fetchUser();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return this.userService.fetchUserById(id);
  }

  @Get(':id/:postId')
  getUserPostById(@Param('id') id: string, @Param('postId') postId: string) {
    console.log(`user id is ${id} and post id is ${postId}`);
    return { id, postId };
  }
}
