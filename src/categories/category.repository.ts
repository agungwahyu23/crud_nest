import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { Categories } from '@prisma/client';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCategoryDto): Promise<Categories> {
    return await this.prisma.categories.create({ data });
  }

  async findAll(): Promise<Categories[]> {
    return await this.prisma.categories.findMany();
  }

  async findOne(id: number): Promise<Categories | null> {
    return await this.prisma.categories.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateCategoryDto): Promise<Categories> {
    return await this.prisma.categories.update({ where: { id }, data });
  }

  async delete(id: number): Promise<Categories> {
    return await this.prisma.categories.delete({ where: { id } });
  }
}
