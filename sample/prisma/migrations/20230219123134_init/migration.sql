-- CreateTable
CREATE TABLE `teatures` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `teatureStatusId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `teatureStatuses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `teatureStatuses_status_key`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `teatures` ADD CONSTRAINT `teatures_teatureStatusId_fkey` FOREIGN KEY (`teatureStatusId`) REFERENCES `teatureStatuses`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
