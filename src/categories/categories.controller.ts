import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from "@nestjs/common";
import { CategoryService } from "./categories.service";
import type { CreateCategoryDto } from "./dto/create-category.dto";
import { ZodValidationPipe } from "src/common/pipes/zod.validation.pipe";
import type { UpdateCategoryDto } from "./dto/update-category.dto";

@Controller('categories')
export class CategoryController{
    constructor(private readonly categoryService: CategoryService){}

    @Get()
    async findAll() {
        return await this.categoryService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.categoryService.findOne(Number(id));
    }

    @Post()
    @UsePipes(ZodValidationPipe)
    async create(@Body() dto: CreateCategoryDto) {
      return await this.categoryService.create(dto);
    }

    @Put(':id')
    @UsePipes(ZodValidationPipe)
    async update(@Param('id') id: string, @Body() dto: UpdateCategoryDto) {
      return await this.categoryService.update(+id, dto);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id:number){
        return await this.categoryService.delete(Number(id));
    }
}