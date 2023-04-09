/*
  Warnings:

  - You are about to drop the column `email` on the `church_profile` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `church_profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "church_profile" DROP COLUMN "email",
DROP COLUMN "phone";
