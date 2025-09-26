import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepo: CategoryRepository) {}

  async create(data: CreateCategoryDto): Promise<CategoryEntity> {
    const category = await this.categoryRepo.create(data);
    return CategoryEntity.fromPrisma(category);
  }

  async findAll(): Promise<CategoryEntity[]> {
    const categories = await this.categoryRepo.findAll();
    return categories.map(CategoryEntity.fromPrisma);
  }

  async findOne(id: number): Promise<CategoryEntity> {
    const category = await this.categoryRepo.findOne(id);
    if (!category) throw new NotFoundException(`Category with id ${id} not found`);
    return CategoryEntity.fromPrisma(category);
  }

  async update(id: number, data: UpdateCategoryDto): Promise<CategoryEntity> {
    const category = await this.categoryRepo.update(id, data);
    return CategoryEntity.fromPrisma(category);
  }

  async delete(id: number): Promise<CategoryEntity> {
    const category = await this.categoryRepo.delete(id);
    return CategoryEntity.fromPrisma(category);
  }
}
