-- CreateTable
CREATE TABLE "anonymous_users" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "anonymous_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "speeches" (
    "id" TEXT NOT NULL,
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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "speeches_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "speeches" ADD CONSTRAINT "speeches_anonUserId_fkey" FOREIGN KEY ("anonUserId") REFERENCES "anonymous_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
