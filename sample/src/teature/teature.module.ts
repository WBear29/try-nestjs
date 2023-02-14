import { Module } from '@nestjs/common';

import { TeatureController } from './teature.controller';
import { TeatureService } from './teature.service';

@Module({
  controllers: [TeatureController],
  providers: [TeatureService],
})
export class TeatureModule {}
