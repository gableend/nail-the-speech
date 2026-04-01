-- CreateTable
CREATE TABLE "speech_versions" (
    "id" TEXT NOT NULL,
    "speechId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "versionNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "speech_versions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "speech_versions_speechId_versionNumber_idx" ON "speech_versions"("speechId", "versionNumber");

-- AddForeignKey
ALTER TABLE "speech_versions" ADD CONSTRAINT "speech_versions_speechId_fkey" FOREIGN KEY ("speechId") REFERENCES "speeches"("id") ON DELETE CASCADE ON UPDATE CASCADE;
