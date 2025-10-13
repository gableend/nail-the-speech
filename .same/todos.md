# Nail The Speech - Current Tasks

## ✅ Completed Tasks
- [x] Fix TypeScript implicit any errors in catch blocks
- [x] Resolve Netlify build command override issue
- [x] Fix 500 error on /api/user-speeches endpoint with missing migrations
- [x] Improve tab readability in dashboard UI

## 🔄 Current Task: Improve Pro Upgrade Flow
- [ ] Add persistent pro upgrade prompts throughout the app
- [ ] Install and configure Stripe for payment processing
- [ ] Create Stripe checkout session API endpoint
- [ ] Implement user subscription tracking in database
- [ ] Update "Next - upgrade to Pro" button to trigger payment popup
- [ ] Restrict step 3 access to paid users only
- [ ] Add pro status checking middleware
- [ ] Update UI to show pro features more prominently
- [ ] Test complete payment flow

## 📝 Notes
- Currently upgrade prompt only shows when hitting 2 edit limit
- Need to implement Stripe payment before users can access step 3
- Pro modal currently has TODO for payment flow
- Database needs user subscription/pro status field
