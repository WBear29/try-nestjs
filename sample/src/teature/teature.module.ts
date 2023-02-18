import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { TeatureController } from './teature.controller';
import { TeatureService } from './teature.service';

@Module({
  controllers: [TeatureController],
  providers: [TeatureService, PrismaService],
})
export class TeatureModule {}
