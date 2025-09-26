import { z } from 'zod/v3';

export const CreateCategorySchema = z.object({
    name: z.string().min(1, 'Name is required'),
});

export type CreateCategoryDto = z.infer<typeof CreateCategorySchema>;
