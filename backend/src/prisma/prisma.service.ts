import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { createHash } from 'crypto';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();

    this.$use(async (params, next) => {
      if (
        ['create', 'update'].includes(params.action) &&
        params.model == 'User' &&
        params.args.data['password']
      ) {
        const password = params.args.data['password'];
        const hash = createHash('sha256').update(password).digest('hex');

        params.args.data['password'] = hash;
      }

      if (params.action === 'update') {
        params.args.data = {
          ...params.args.data,
          updatedAt: new Date(),
        };
      }
      return next(params);
    });
  }
}
