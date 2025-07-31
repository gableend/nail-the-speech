# OpenAI Integration for Wedding Speech Generation

## Overview

The application now includes full OpenAI integration for AI-powered wedding speech generation. The system intelligently adapts to the amount of information provided and generates contextually appropriate speeches for different wedding roles.

## Key Features

### 🎯 Smart Data Analysis
- **Minimal Data**: Essential information only (Step 1 fields)
- **Enriched Data**: Essential + enrichment details (Steps 1-2)
- **Premium Data**: All information including premium features (Steps 1-3)

### 🤖 AI Model Selection
- **Free Users**: GPT-3.5 Turbo (fast, cost-effective)
- **Premium Users**: GPT-4 (higher quality, more sophisticated)
- **Token Limits**: 1200 for free, 1500 for premium

### 📝 Role-Specific Generation
- **Best Man**: Friendship focus, humor balanced with sentiment
- **Maid of Honor**: Deep friendship, emotional support
- **Father of Bride**: Paternal pride, family welcome
- **Mother of Bride**: Maternal love, blessing
- **Groom**: Gratitude, love declaration
- **Bride**: Thanks, excitement for future

## Technical Implementation

### API Endpoint: `/api/generate-speech`

**Request Format:**
```json
{
  "selectedRole": "best-man",
  "yourName": "John",
  "groomName": "Mike",
  "brideName": "Sarah",
  "relationshipToGroom": "best friends since college",
  "tone": "balanced",
  "greatStoryMemory": "Story about the couple...",
  "howLongKnown": "8 years",
  "groomIn3Words": "loyal, funny, caring"
}
```

**Response Format:**
```json
{
  "speech": "Generated speech content...",
  "wordCount": 487,
  "estimatedTime": 3,
  "isAIGenerated": true,
  "isPremium": false,
  "dataCompleteness": "enriched",
  "model": "gpt-3.5-turbo",
  "message": "Speech generated successfully"
}
```

## Quality Assurance

### AI Speech Quality
- **Natural Flow**: Conversational tone that sounds authentic
- **Personal Touch**: Incorporates specific details seamlessly
- **Appropriate Length**: Matches occasion and role expectations
- **Emotional Balance**: Right mix of humor and sentiment

### Enhanced Fallback System
- Uses form data to create personalized templates
- Adapts structure based on role and tone
- Incorporates available enrichment data
- Maintains speech quality even without AI

## Configuration

### Environment Variables Required
```bash
# Required for AI generation
OPENAI_API_KEY="sk-your-openai-api-key"
```

### Cost Management
- Token limits controlled per user tier
- Model selection cost-optimized based on subscription
- Fallback system prevents total failures

## Conclusion

The OpenAI integration transforms Nail The Speech into a sophisticated AI writing assistant while maintaining reliability through intelligent fallbacks.
