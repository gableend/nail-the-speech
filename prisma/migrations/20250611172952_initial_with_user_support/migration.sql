-- CreateTable
CREATE TABLE "Speech" (
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
    "userId" TEXT,
    "isCompleted" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
