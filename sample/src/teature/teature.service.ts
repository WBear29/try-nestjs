import { Injectable } from '@nestjs/common';

@Injectable()
export class TeatureService {
  getAll(): string[] {
    return ['teature1', 'teature2'];
  }
}
