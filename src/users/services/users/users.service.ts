import { Injectable } from '@nestjs/common';
import { createUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Ahmed Ali', email: 'ahmedali123@gmail.com' },
  ];
  fetchUser() {
    return this.fakeUsers;
  }

  createUser(userDetails: createUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }
}
