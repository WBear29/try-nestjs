import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { TeatureStatus } from './teature-status.enum';
import { Teature } from './teature.model';
import { TeatureService } from './teature.service';

@Controller('teature')
export class TeatureController {
  constructor(private readonly teatureService: TeatureService) {}
  @Get()
  getAll(): Teature[] {
    return this.teatureService.getAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Teature {
    return this.teatureService.findById(id);
  }

  @Post()
  create(
    @Body('id') id: string,
    @Body('name') name: string,
    @Body('email') email: string,
  ): Teature {
    const teature: Teature = {
      id,
      name,
      email,
      status: TeatureStatus.Rest,
    };
    return this.teatureService.create(teature);
  }

  @Patch(':id')
  update(@Param('id') id: string): Teature {
    return this.teatureService.updateStatus(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    return this.teatureService.delete(id);
  }
}
