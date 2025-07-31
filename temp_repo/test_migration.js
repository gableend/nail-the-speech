// Test data migration from anonymous to authenticated user
const { PrismaClient } = require('@prisma/client');

async function testDataMigration() {
  console.log('🧪 Testing Data Migration (Anonymous → Authenticated)...\n');

  const prisma = new PrismaClient();

  try {
    // Step 1: Use the existing anonymous user with speech
    const anonUserId = 'cmcuw3lyz0000cua2z3hgckzq';
    const clerkUserId = 'user_test_12345';

    console.log('📊 Before Migration:');
    const beforeMigration = await prisma.speech.findMany({
      where: { anonUserId },
      select: { id: true, title: true, userId: true, anonUserId: true }
    });
    console.log(`   Anonymous user has ${beforeMigration.length} speeches`);
    beforeMigration.forEach(speech =>
      console.log(`   - ${speech.id}: userId=${speech.userId || 'null'}, anonUserId=${speech.anonUserId}`)
    );

    // Step 2: Perform migration (simulate the migrateAnonymousUserData function)
    console.log('\n🔄 Performing migration...');

    // Update all speeches from anonymous user to authenticated user
    const migrationResult = await prisma.speech.updateMany({
      where: { anonUserId },
      data: {
        userId: clerkUserId,
        anonUserId: null // Clear the anonymous user ID
      }
    });

    console.log(`✅ Migrated ${migrationResult.count} speeches`);

    // Step 3: Verify migration
    console.log('\n📊 After Migration:');
    const afterMigration = await prisma.speech.findMany({
      where: { userId: clerkUserId },
      select: { id: true, title: true, userId: true, anonUserId: true }
    });
    console.log(`   Authenticated user now has ${afterMigration.length} speeches`);
    afterMigration.forEach(speech =>
      console.log(`   - ${speech.id}: userId=${speech.userId}, anonUserId=${speech.anonUserId || 'null'}`)
    );

    // Step 4: Clean up anonymous user (optional)
    const deletedAnonUser = await prisma.anonymousUser.delete({
      where: { id: anonUserId }
    });
    console.log(`🗑️ Cleaned up anonymous user: ${deletedAnonUser.id}`);

    // Step 5: Verify no orphaned anonymous data
    const remainingAnonSpeeches = await prisma.speech.findMany({
      where: { anonUserId: anonUserId }
    });
    console.log(`✅ Orphaned anonymous speeches: ${remainingAnonSpeeches.length} (should be 0)`);

    return {
      migratedCount: migrationResult.count,
      newUserSpeeches: afterMigration.length,
      success: migrationResult.count > 0 && remainingAnonSpeeches.length === 0
    };

  } catch (error) {
    console.error('❌ Migration error:', error);
    return { success: false, error: error.message };
  } finally {
    await prisma.$disconnect();
  }
}

testDataMigration().then(result => {
  if (result.success) {
    console.log('\n🎉 Data migration test PASSED!');
    console.log(`📊 Successfully migrated ${result.migratedCount} speeches`);
    console.log('✅ Anonymous user data properly transferred to authenticated user');
    console.log('✅ No orphaned anonymous data remaining');
  } else {
    console.log('\n❌ Data migration test FAILED!');
    if (result.error) console.log(`Error: ${result.error}`);
  }
});
