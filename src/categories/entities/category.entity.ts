import { Categories } from "@prisma/client";

export class CategoryEntity {
    id: number;
    name: string | null;
    created_at: Date;

    constructor(partial: Partial<CategoryEntity>) {
        Object.assign(this, partial);
    }

    static fromPrisma(category: Categories): CategoryEntity {
    return new CategoryEntity({
      id: category.id,
      name: category.name,
      created_at: category.createdAt,
    });
  }
}
