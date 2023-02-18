import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeatureModule } from './teature/teature.module';

@Module({
  imports: [TeatureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
