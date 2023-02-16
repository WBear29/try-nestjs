import { v4 as uuid } from 'uuid';

import { Injectable, NotFoundException } from '@nestjs/common';

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
    const found = this.teatures.find((item) => item.id === id);
    if (!found) {
      throw new NotFoundException();
    }
    return found;
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
    const found = this.teatures.find((item) => item.id === id);
    if (!found) {
      throw new NotFoundException();
    }
    found.status = TeatureStatus.Contactable;
    return found;
  }

  delete(id: string): void {
    if (!this.teatures.find((item) => item.id === id)) {
      throw new NotFoundException();
    }
    this.teatures = this.teatures.filter((teature) => teature.id !== id);
  }
}
