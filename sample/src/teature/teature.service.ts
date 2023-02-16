import { v4 as uuid } from 'uuid';

import { Injectable } from '@nestjs/common';

import { CreateTeatureDto } from './dto/create-teature.dto';
import { TeatureStatus } from './teature-status.enum';
import { Teature } from './teature.model';

@Injectable()
export class TeatureService {
  private teatures: Teature[] = [];
  getAll(): Teature[] {
    return this.teatures;
  }

  findById(id: string): Teature {
    return this.teatures.find((teature) => teature.id === id);
  }

  create(createTeatureDto: CreateTeatureDto): Teature {
    const teature: Teature = {
      id: uuid(),
      ...createTeatureDto,
      status: TeatureStatus.Rest,
    };
    this.teatures.push(teature);
    return teature;
  }

  updateStatus(id: string): Teature {
    const teature = this.findById(id);
    teature.status = TeatureStatus.Contactable;
    return teature;
  }

  delete(id: string): void {
    this.teatures = this.teatures.filter((teature) => teature.id !== id);
  }
}
