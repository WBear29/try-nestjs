import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { TeatureStatus } from '../teature/teature-status.enum';

@Entity()
export class Teature {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  status: TeatureStatus;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
