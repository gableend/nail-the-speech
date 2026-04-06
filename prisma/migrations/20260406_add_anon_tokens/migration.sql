-- CreateTable
CREATE TABLE "anon_tokens" (
    "id" TEXT NOT NULL,
    "ipHash" TEXT NOT NULL,
    "budget" INTEGER NOT NULL DEFAULT 1,
    "consumed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "anon_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "anon_tokens_ipHash_createdAt_idx" ON "anon_tokens"("ipHash", "createdAt");
