import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/CreateUserDto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: createUserDto, metadata: ArgumentMetadata) {
    console.log('Validate create user pipe');
    const parseAgeToInt = parseInt(value.age.toString());
    if (isNaN(parseAgeToInt)) {
      console.log(`${value.age} is not a number`);
      throw new HttpException(
        'Invalid Data Type for age',
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log(`${parseAgeToInt} is a number`);
    return { ...value, age: parseAgeToInt };
  }
}
