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

@Controller('users')
export class UsersController {
  @Get()
  getUser(@Query('sortedByDes', ParseBoolPipe) sortedByDes: boolean) {
    console.log(sortedByDes);
    return [{ username: 'Ahmed', email: 'ahmedali123@gmail.com' }];
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
    return {};
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return { id };
  }

  @Get(':id/:postId')
  getUserPostById(@Param('id') id: string, @Param('postId') postId: string) {
    console.log(`user id is ${id} and post id is ${postId}`);
    return { id, postId };
  }
}
