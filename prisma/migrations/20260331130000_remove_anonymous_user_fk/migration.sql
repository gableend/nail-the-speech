-- DropForeignKey
ALTER TABLE "speeches" DROP CONSTRAINT IF EXISTS "speeches_anonUserId_fkey";

-- DropTable (no longer needed — anonymous tracking uses client-side cookie)
DROP TABLE IF EXISTS "anonymous_users";
