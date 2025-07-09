const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function testAnonymousFlow() {
  console.log('🧪 Testing Anonymous User Flow...\n');

  try {
    // Test 1: Create a speech as anonymous user
    console.log('📝 Test 1: Creating speech as anonymous user...');
    const speechData = {
      selectedRole: "best-man",
      yourName: "TestUser",
      groomName: "John",
      brideName: "Sarah",
      relationshipToGroom: "college roommate",
      tone: "balanced",
      lengthPreference: "medium",
      greatStoryMemory: "When John tried to cook for Sarah on their first date and burned everything, but she just laughed and ordered pizza instead. That was when I knew they were perfect for each other."
    };

    const response = await fetch('http://localhost:3000/api/generate-speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(speechData)
    });

    if (response.ok) {
      const result = await response.json();
      console.log('✅ Speech created successfully!');
      console.log(`📊 Word count: ${result.wordCount}`);
      console.log(`⏱️ Estimated time: ${result.estimatedTime} minutes`);
      console.log(`🔧 Data completeness: ${result.dataCompleteness}`);
      console.log(`🤖 Model used: ${result.model}`);
      console.log(`📝 Speech preview: ${result.speech.substring(0, 100)}...`);
    } else {
      const error = await response.json();
      console.log('❌ Error creating speech:', error);
    }

  } catch (error) {
    console.log('💥 Test failed:', error.message);
  }
}

testAnonymousFlow();
