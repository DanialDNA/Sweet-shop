/*
  Warnings:

  - You are about to drop the column `rate` on the `Sweet` table. All the data in the column will be lost.
  - Added the required column `rate` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "rate" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Sweet" DROP COLUMN "rate";
