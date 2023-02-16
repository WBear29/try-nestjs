import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateTeatureDto } from './dto/create-teature.dto';
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
  findById(@Param('id', ParseUUIDPipe) id: string): Teature {
    return this.teatureService.findById(id);
  }

  @Post()
  create(@Body() createTeatureDto: CreateTeatureDto): Teature {
    return this.teatureService.create(createTeatureDto);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string): Teature {
    return this.teatureService.updateStatus(id);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string): void {
    return this.teatureService.delete(id);
  }
}
