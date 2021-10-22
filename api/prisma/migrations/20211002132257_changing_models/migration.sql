/*
  Warnings:

  - You are about to drop the column `initials` on the `state` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[iso_code]` on the table `state` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `iso_code` to the `country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_code` to the `country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country_code` to the `state` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iso_code` to the `state` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "state_initials_key";

-- AlterTable
ALTER TABLE "country" ADD COLUMN     "iso_code" TEXT NOT NULL,
ADD COLUMN     "phone_code" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "state" DROP COLUMN "initials",
ADD COLUMN     "country_code" TEXT NOT NULL,
ADD COLUMN     "iso_code" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "state_iso_code_key" ON "state"("iso_code");
