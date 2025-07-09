-- AlterTable
ALTER TABLE "speeches" ADD COLUMN "customTitle" TEXT;
ALTER TABLE "speeches" ADD COLUMN "isFinal" BOOLEAN NOT NULL DEFAULT false;
