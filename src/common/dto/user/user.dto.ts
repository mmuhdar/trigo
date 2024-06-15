import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsPhoneNumber,
  MinLength,
} from 'class-validator';
import { RoleUser } from 'src/common/enums';

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
  @MinLength(8, {
    message: 'Password must be at least 8 characters',
  })
  @IsNotEmpty()
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
