-- CreateTable
CREATE TABLE `store` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `parent_id` INTEGER NULL,
    `code` VARCHAR(200) NULL,
    `name` VARCHAR(200) NULL,
    `address` VARCHAR(191) NULL,
    `phone` VARCHAR(15) NULL,
    `key` VARCHAR(200) NULL,
    `store_type_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
