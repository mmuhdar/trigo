import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, RegisterDto } from 'src/common/dto';
import { hashPassword, excludeField } from 'src/shared/utils';
import { ResponseInterface } from 'src/common/interfaces';
import { Status, RoleUser } from 'src/common/enums';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async register(registerUser: RegisterDto): Promise<ResponseInterface> {
    const { name, email, password, phoneNumber } = registerUser;

    const hashedPassword = await hashPassword(password);

    const data = await this.prisma.user.create({
      data: {
        name,
        email,
        phoneNumber,
        password: hashedPassword,
        role: RoleUser.CUSTOMER,
      },
    });

    excludeField(data, ['password', 'updatedAt', 'createdAt', 'role']);

    return {
      status: Status.SUCCESS,
      message: `Success create user`,
      content: data,
    };
  }

  async login(loginUser: LoginDto): Promise<any> {
    return loginUser;
  }
}
