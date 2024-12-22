/*
  Warnings:

  - You are about to drop the column `Description` on the `Service` table. All the data in the column will be lost.
  - Added the required column `description` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Service" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL
);
INSERT INTO "new_Service" ("id", "imageUrl", "title") SELECT "id", "imageUrl", "title" FROM "Service";
DROP TABLE "Service";
ALTER TABLE "new_Service" RENAME TO "Service";
CREATE UNIQUE INDEX "Service_title_key" ON "Service"("title");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
