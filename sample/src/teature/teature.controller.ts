import { v4 as uuid } from 'uuid';

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
import { Prisma, Teature } from '@prisma/client';

import { CreateTeatureDto } from './dto/create-teature.dto';
import { TeatureService } from './teature.service';

@Controller('teature')
export class TeatureController {
  constructor(private readonly teatureService: TeatureService) {}
  @Get()
  getAll(): Promise<Teature[]> {
    return this.teatureService.teatures();
  }

  @Get(':id')
  findById(@Param('id', ParseUUIDPipe) id: string): Promise<Teature> {
    return this.teatureService.teature({ id });
  }

  @Post()
  create(@Body() createTeatureDto: CreateTeatureDto): Promise<Teature> {
    const { name, email } = createTeatureDto;
    return this.teatureService.createTeature({
      id: uuid(),
      name,
      email,
    });
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateTeatureDto: CreateTeatureDto,
  ): Promise<Teature> {
    const { name, email } = updateTeatureDto;
    return this.teatureService.updateTeature({
      where: { id },
      data: { name, email },
    });
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string): void {
    this.teatureService.deleteTeature({ id });
  }
}
