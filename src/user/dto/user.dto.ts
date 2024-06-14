import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  IsPhoneNumber,
} from 'class-validator';
import { RoleUser } from '../enum/role-user.enum';

export class RegisterUser {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  role?: RoleUser;
}

// refactor UserDto
export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Min(8)
  password: string;

  @IsOptional()
  @IsEnum(RoleUser)
  role?: RoleUser;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber('ID')
  phoneNumber: string;
}

export class LoginDto {
  @IsNotEmpty()
  @IsPhoneNumber('ID')
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
