/*
  Warnings:

  - A unique constraint covering the columns `[state_id,id]` on the table `city` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[initials]` on the table `state` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "city_state_id_id_key" ON "city"("state_id", "id");

-- CreateIndex
CREATE UNIQUE INDEX "state_initials_key" ON "state"("initials");
