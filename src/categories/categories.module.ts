import { Module } from '@nestjs/common';
import { CategoryService } from './categories.service';
import { CategoryController } from './categories.controller';
import { CategoryRepository } from './category.repository';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository, PrismaService],
})
export class CategoriesModule {}
