/*
  Warnings:

  - You are about to drop the column `lasname` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "lasname",
ADD COLUMN     "lastname" TEXT;
