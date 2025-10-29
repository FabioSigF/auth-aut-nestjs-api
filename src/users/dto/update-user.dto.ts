import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Roles } from 'generated/prisma';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  email?: string | undefined;
  password?: string | undefined;
  role?: Roles;
}
