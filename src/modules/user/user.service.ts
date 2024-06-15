import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from 'src/common/dto';
import { hashPassword, excludeField } from 'src/shared/utils';
import { RegisterInterface } from 'src/common/interfaces';
import { Status, RoleUser } from 'src/common/enums';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async register(registerUser: RegisterDto): Promise<RegisterInterface> {
    try {
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
    } catch (error) {
      console.log(error);
    }
  }
}
