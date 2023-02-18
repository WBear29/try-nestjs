import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Teature } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class TeatureService {
  constructor(private prisma: PrismaService) {}

  async teature(
    teatureWhereUniqueInput: Prisma.TeatureWhereUniqueInput,
  ): Promise<Teature | null> {
    return this.prisma.teature.findUnique({
      where: teatureWhereUniqueInput,
    });
  }

  async teatures(): Promise<Teature[]> {
    return this.prisma.teature.findMany();
  }

  async createTeature(data: Prisma.TeatureCreateInput): Promise<Teature> {
    return this.prisma.teature.create({
      data,
    });
  }

  async updateTeature(params: {
    where: Prisma.TeatureWhereUniqueInput;
    data: Prisma.TeatureUpdateInput;
  }): Promise<Teature> {
    const { where, data } = params;
    return this.prisma.teature.update({
      data,
      where,
    });
  }

  async deleteTeature(where: Prisma.TeatureWhereUniqueInput): Promise<Teature> {
    return this.prisma.teature.delete({
      where,
    });
  }
}
