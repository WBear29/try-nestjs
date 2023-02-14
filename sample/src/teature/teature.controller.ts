import { Controller, Get } from '@nestjs/common';

import { TeatureService } from './teature.service';

@Controller('teature')
export class TeatureController {
  constructor(private readonly teatureService: TeatureService) {}
  @Get()
  getAll() {
    return this.teatureService.getAll();
  }
}
