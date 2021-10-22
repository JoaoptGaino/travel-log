/*
  Warnings:

  - You are about to drop the column `state_id` on the `city` table. All the data in the column will be lost.
  - You are about to drop the column `country_id` on the `state` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[state_code]` on the table `city` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[state_code,id]` on the table `city` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[iso_code]` on the table `country` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `state_code` to the `city` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "city" DROP CONSTRAINT "city_state_id_fkey";

-- DropForeignKey
ALTER TABLE "state" DROP CONSTRAINT "state_country_id_fkey";

-- DropIndex
DROP INDEX "city_state_id_id_key";

-- AlterTable
ALTER TABLE "city" DROP COLUMN "state_id",
ADD COLUMN     "state_code" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "state" DROP COLUMN "country_id";

-- CreateIndex
CREATE UNIQUE INDEX "city_state_code_key" ON "city"("state_code");

-- CreateIndex
CREATE UNIQUE INDEX "city_state_code_id_key" ON "city"("state_code", "id");

-- CreateIndex
CREATE UNIQUE INDEX "country_iso_code_key" ON "country"("iso_code");

-- AddForeignKey
ALTER TABLE "state" ADD CONSTRAINT "state_country_code_fkey" FOREIGN KEY ("country_code") REFERENCES "country"("iso_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "city" ADD CONSTRAINT "city_state_code_fkey" FOREIGN KEY ("state_code") REFERENCES "state"("iso_code") ON DELETE RESTRICT ON UPDATE CASCADE;
