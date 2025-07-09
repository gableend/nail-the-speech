/*
  Warnings:

  - You are about to drop the `Speech` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Speech";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "anonymous_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "speeches" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "tone" TEXT NOT NULL,
    "length" TEXT NOT NULL,
    "wordCount" INTEGER,
    "estimatedTime" INTEGER,
    "isAIGenerated" BOOLEAN NOT NULL DEFAULT true,
    "formData" TEXT NOT NULL,
    "regenCount" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT,
    "anonUserId" TEXT,
    "isCompleted" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "speeches_anonUserId_fkey" FOREIGN KEY ("anonUserId") REFERENCES "anonymous_users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
