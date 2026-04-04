#!/bin/bash
# ─────────────────────────────────────────────────────────────
# End-to-end test script for the abandoned session email cadence
# Uses ?test=true (2-minute delays instead of production delays)
# ─────────────────────────────────────────────────────────────

SITE="https://www.nailthespeech.com"
CRON_SECRET="${CRON_SECRET:-}"
TEST_EMAIL="${1:-test@example.com}"

if [ -z "$CRON_SECRET" ]; then
  echo "Error: CRON_SECRET environment variable is not set."
  echo "Run with: CRON_SECRET=your_secret ./scripts/test-email-flow.sh your@email.com"
  exit 1
fi

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

step=0
next_step() {
  step=$((step + 1))
  echo ""
  echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo -e "${CYAN}  Step $step: $1${NC}"
  echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
}

wait_for_enter() {
  echo ""
  echo -e "${YELLOW}  Press ENTER when ready...${NC}"
  read -r
}

run_cron() {
  echo ""
  echo -e "  Running cron..."
  RESULT=$(curl -s "$SITE/api/cron/process-email-leads?test=true" \
    -X POST \
    -H "Authorization: Bearer $CRON_SECRET")
  echo -e "  Response: ${GREEN}$RESULT${NC}"
  echo "$RESULT"
}

# ─────────────────────────────────────────────────────────────

echo ""
echo -e "${CYAN}╔══════════════════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║     Email Cadence End-to-End Test                   ║${NC}"
echo -e "${CYAN}║     Test email: $TEST_EMAIL${NC}"
echo -e "${CYAN}╚══════════════════════════════════════════════════════╝${NC}"

# ─── Step 1: Reset ──────────────────────────────────────────

next_step "Preparation"
echo ""
echo "  Before starting:"
echo "  1. Clear localStorage for nailthespeech.com"
echo "     (DevTools → Application → Local Storage → Clear)"
echo "  2. Make sure you're signed OUT of the app"
echo "  3. Check the email_leads table in Neon and delete"
echo "     any existing row for: $TEST_EMAIL"
echo ""
echo -e "  ${YELLOW}Tip: Use '$TEST_EMAIL' as the email in the generator${NC}"
wait_for_enter

# ─── Step 2: Generate a speech ──────────────────────────────

next_step "Generate a speech (creates the email lead)"
echo ""
echo "  1. Go to: $SITE/generator"
echo "  2. Enter your name and '$TEST_EMAIL' on Step 0"
echo "  3. Click Next (this captures the email lead)"
echo "  4. Continue through all steps and generate a speech"
echo "  5. You should see the speech preview + paywall"
echo "  6. DO NOT pay — close the tab"
wait_for_enter

# ─── Step 3: Verify lead captured ──────────────────────────

next_step "Verify lead was captured (quick cron check)"
echo ""
echo "  Running cron immediately (lead is <2 min old, should NOT send)..."
RESULT=$(run_cron)
echo ""
if echo "$RESULT" | grep -q '"email1Sent":0'; then
  echo -e "  ${GREEN}✓ Correct — no emails sent yet (lead too fresh)${NC}"
else
  echo -e "  ${RED}✗ Unexpected result — check output above${NC}"
fi

# ─── Step 4: Wait + send Email 1 ────────────────────────────

next_step "Send Email 1 (claim speech + 20% off)"
echo ""
echo -e "  ${YELLOW}Wait at least 2 minutes since you clicked Next on Step 0${NC}"
echo "  Then press ENTER to trigger the cron."
wait_for_enter
RESULT=$(run_cron)
echo ""
if echo "$RESULT" | grep -q '"email1Sent":1'; then
  echo -e "  ${GREEN}✓ Email 1 sent! Check inbox (and spam) for: $TEST_EMAIL${NC}"
else
  echo -e "  ${RED}✗ Email 1 was not sent — check output above${NC}"
fi

# ─── Step 5: Click Email 1 CTA ──────────────────────────────

next_step "Click Email 1 CTA (confirms sub + takes you to speech)"
echo ""
echo "  1. Open the email from Nail The Speech"
echo "  2. Click 'Claim My Speech'"
echo "  3. You should land on your speech preview with the paywall"
echo "  4. The discount code should be in the URL (?discount=XXX)"
echo "  5. DO NOT pay yet"
echo ""
echo "  Verify:"
echo "  - Your speech text is visible (preview)"
echo "  - The Pro upgrade prompt is showing"
echo "  - The URL contains speechId and discount params"
wait_for_enter

# ─── Step 6: Wait + send Email 2 (reminder) ─────────────────

next_step "Send Email 2 (discount expiring reminder)"
echo ""
echo -e "  ${YELLOW}Wait at least 2 minutes since you clicked the Email 1 link${NC}"
echo "  Then press ENTER to trigger the cron."
wait_for_enter
RESULT=$(run_cron)
echo ""
if echo "$RESULT" | grep -q '"email2Sent":1'; then
  echo -e "  ${GREEN}✓ Email 2 sent! Check inbox for the reminder${NC}"
else
  echo -e "  ${RED}✗ Email 2 was not sent — check output above${NC}"
fi

# ─── Step 7: Click Email 2 CTA ──────────────────────────────

next_step "Click Email 2 CTA (discount reminder)"
echo ""
echo "  1. Open the reminder email"
echo "  2. Click 'Finish My Speech'"
echo "  3. You should land on your speech with the paywall"
echo "  4. The discount code should be in the URL"
wait_for_enter

# ─── Step 8: Test the discount code ──────────────────────────

next_step "Verify discount code at checkout"
echo ""
echo "  1. Click the upgrade/pay button to go to Stripe checkout"
echo "  2. Look for a promo code field"
echo "  3. Enter the discount code from the email"
echo "  4. Verify 20% is applied to the price"
echo "  5. You can complete or cancel the payment"
wait_for_enter

# ─── Step 9: Verify no more emails ──────────────────────────

next_step "Verify no duplicate emails"
echo ""
echo "  Running cron again — should send 0 emails..."
RESULT=$(run_cron)
echo ""
if echo "$RESULT" | grep -q '"email1Sent":0' && echo "$RESULT" | grep -q '"email2Sent":0'; then
  echo -e "  ${GREEN}✓ Correct — no duplicate emails sent${NC}"
else
  echo -e "  ${RED}✗ Unexpected — emails may have been sent again${NC}"
fi

# ─── Done ────────────────────────────────────────────────────

echo ""
echo -e "${GREEN}╔══════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║     All tests complete!                              ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════════════════════╝${NC}"
echo ""
