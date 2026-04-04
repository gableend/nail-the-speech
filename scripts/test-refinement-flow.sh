#!/bin/bash
# ─────────────────────────────────────────────────────────────
# Interactive test script for the refinement architecture
# Tests: model routing, refine vs start-over, usage logging,
#        instruction classification, UI buttons
# ─────────────────────────────────────────────────────────────

SITE="${SITE_URL:-http://localhost:3000}"
DB_CHECK="${DB_CHECK:-true}"  # Set to false to skip DB verification steps

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
BOLD='\033[1m'
DIM='\033[2m'
NC='\033[0m'

passed=0
failed=0
step=0

next_step() {
  step=$((step + 1))
  echo ""
  echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo -e "${CYAN}  Test $step: $1${NC}"
  echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
}

wait_for_enter() {
  echo ""
  echo -e "${YELLOW}  Press ENTER when ready...${NC}"
  read -r
}

check_result() {
  local description="$1"
  echo ""
  echo -e "  ${BOLD}Check:${NC} $description"
  echo -e "  ${YELLOW}Did this pass? (y/n)${NC}"
  read -r answer
  if [[ "$answer" =~ ^[Yy] ]]; then
    echo -e "  ${GREEN}✓ PASS${NC}"
    passed=$((passed + 1))
  else
    echo -e "  ${RED}✗ FAIL${NC}"
    failed=$((failed + 1))
  fi
}

countdown() {
  local secs=$1
  local label="${2:-Waiting}"
  echo ""
  while [ $secs -gt 0 ]; do
    local mins=$((secs / 60))
    local s=$((secs % 60))
    printf "\r  ${YELLOW}⏳ ${label}... %d:%02d remaining${NC}  " $mins $s
    sleep 1
    secs=$((secs - 1))
  done
  printf "\r  ${GREEN}✓ Wait complete!                          ${NC}\n"
  echo ""
}

# ─────────────────────────────────────────────────────────────

echo ""
echo -e "${CYAN}╔══════════════════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║     Refinement Architecture Test                    ║${NC}"
echo -e "${CYAN}║     Site: ${BOLD}$SITE${NC}"
echo -e "${CYAN}║                                                      ║${NC}"
echo -e "${CYAN}║     Tests model routing (GPT-4o vs GPT-4o-mini),    ║${NC}"
echo -e "${CYAN}║     refine vs start-over classification, UI,        ║${NC}"
echo -e "${CYAN}║     usage logging, and instruction limits.           ║${NC}"
echo -e "${CYAN}╚══════════════════════════════════════════════════════╝${NC}"

echo ""
echo -e "  ${BOLD}Prerequisites:${NC}"
echo "  1. You must be logged in as a Pro user"
echo "  2. Browser DevTools Console open (to check logs)"
echo "  3. Network tab open (to inspect API payloads)"
echo ""
echo -e "  ${DIM}Tip: Use ?demo=true to auto-fill form data${NC}"
wait_for_enter

# ─── Test 1: Initial Speech Generation ─────────────────────

next_step "Initial Speech Generation (GPT-4o)"
echo ""
echo "  Actions:"
echo "  1. Go to ${SITE}/generator?demo=true"
echo "  2. Walk through the form steps (data should be pre-filled)"
echo "  3. Click 'Generate My Speech' on the final step"
echo "  4. Wait for the speech to stream in"
echo ""
echo "  ${BOLD}What to verify in Network tab:${NC}"
echo "  - Open the generate-speech-stream request"
echo "  - In the Request Payload, confirm:"
echo "    ${GREEN}isRegeneration: false${NC}"
echo "    ${GREEN}No isRefinement or isStartOver fields${NC}"
echo ""
echo "  ${BOLD}What to verify in Console:${NC}"
echo "  - Look for: ${GREEN}[GENERATOR] Complete: { actionType: 'generate', model: 'gpt-4o' }${NC}"
echo ""
echo "  ${BOLD}What to verify in UI:${NC}"
echo "  - Speech generates successfully (4-5 minutes / 600+ words)"
echo "  - 'Refine Your Speech' section appears below (not 'Improve')"
echo "  - Primary button says '✨ Refine Speech' (disabled until text entered)"
echo "  - Secondary button says 'Start Over' (subtle/de-emphasized)"

wait_for_enter
check_result "Initial generation uses GPT-4o, speech is 4-5 mins, 'Refine Your Speech' UI appears"

# ─── Test 2: Quick Refinement Pill ──────────────────────────

next_step "Quick Refinement Pill (GPT-4o-mini)"
echo ""
echo "  Actions:"
echo "  1. In the 'Quick refinements' section, click any pill"
echo "     (e.g., 'Make it funnier', 'Add more emotion', etc.)"
echo "  2. Watch the speech regenerate"
echo ""
echo "  ${BOLD}What to verify in Network tab:${NC}"
echo "  - New generate-speech-stream request"
echo "  - In the Request Payload, confirm:"
echo "    ${GREEN}isRefinement: true${NC}"
echo "    ${GREEN}isStartOver: false${NC}"
echo "    ${GREEN}existingSpeechContent: (the full speech text)${NC}"
echo "    ${GREEN}refinementInstruction: (the pill text)${NC}"
echo ""
echo "  ${BOLD}What to verify in Console:${NC}"
echo "  - Look for: ${GREEN}actionType: 'refine', model: 'gpt-4o-mini'${NC}"
echo ""
echo "  ${BOLD}What to verify in UI:${NC}"
echo "  - Speech updates (not a complete rewrite — structure mostly preserved)"
echo "  - The refinement is targeted to what the pill described"

wait_for_enter
check_result "Quick pill uses GPT-4o-mini refinement (not full regen)"

# ─── Test 3: Custom Refinement Instruction ──────────────────

next_step "Custom Refinement Instruction (GPT-4o-mini)"
echo ""
echo "  Actions:"
echo "  1. In the text area, type a refinement like:"
echo "     ${BOLD}'Add a joke about how he's always late to everything'${NC}"
echo "  2. Click '✨ Refine Speech'"
echo "  3. Watch the speech update"
echo ""
echo "  ${BOLD}What to verify in Network tab:${NC}"
echo "  - Request Payload shows:"
echo "    ${GREEN}isRefinement: true${NC}"
echo "    ${GREEN}refinementInstruction: 'Add a joke about...'${NC}"
echo ""
echo "  ${BOLD}What to verify in Console:${NC}"
echo "  - ${GREEN}actionType: 'refine', model: 'gpt-4o-mini'${NC}"
echo ""
echo "  ${BOLD}What to verify in UI:${NC}"
echo "  - The joke is added without rewriting the entire speech"
echo "  - Overall structure/length stays roughly the same"

wait_for_enter
check_result "Custom instruction routes to GPT-4o-mini refinement"

# ─── Test 4: Instruction Max Length ─────────────────────────

next_step "Instruction Max Length (500 chars)"
echo ""
echo "  Actions:"
echo "  1. In the instruction text area, try pasting a very long string"
echo "     (500+ characters)"
echo ""
echo "  ${BOLD}What to verify:${NC}"
echo "  - Character counter shows at bottom right (e.g., '500/500')"
echo "  - Text is truncated at 500 characters — cannot type beyond that"

wait_for_enter
check_result "Instruction textarea is capped at 500 characters with counter"

# ─── Test 5: Start Over Button ──────────────────────────────

next_step "Start Over Button (GPT-4o full regen)"
echo ""
echo "  Actions:"
echo "  1. Click the 'Start Over' button (de-emphasized, next to Refine)"
echo "  2. Watch the speech regenerate completely"
echo ""
echo "  ${BOLD}What to verify in Network tab:${NC}"
echo "  - Request Payload shows:"
echo "    ${GREEN}isRefinement: false${NC}"
echo "    ${GREEN}isStartOver: true${NC}"
echo "    ${GREEN}No existingSpeechContent field${NC}"
echo ""
echo "  ${BOLD}What to verify in Console:${NC}"
echo "  - ${GREEN}actionType: 'start_over', model: 'gpt-4o'${NC}"
echo ""
echo "  ${BOLD}What to verify in UI:${NC}"
echo "  - Speech is completely different (new structure, new wording)"
echo "  - Still matches the tone/length from original form data"

wait_for_enter
check_result "Start Over uses GPT-4o and produces a completely new speech"

# ─── Test 6: Contextual Pill + Details ──────────────────────

next_step "Contextual Pill with Details"
echo ""
echo "  Actions:"
echo "  1. Under 'Add specific details', click a contextual pill"
echo "     (e.g., 'Add a specific story →', 'Mention someone special →')"
echo "  2. The pill should highlight and the text area label changes"
echo "  3. Type details in the text area (e.g., a story to include)"
echo "  4. Click '✨ Refine Speech'"
echo ""
echo "  ${BOLD}What to verify:${NC}"
echo "  - Pill is highlighted in pink when selected"
echo "  - Text area label updates to show the selected pill"
echo "  - 'Clear selection' link appears"
echo "  - On submit, the instruction combines pill + details"
echo "  - ${GREEN}isRefinement: true${NC} in Network tab"
echo "  - Speech is refined (not fully rewritten)"

wait_for_enter
check_result "Contextual pill + details flow works and routes to refinement"

# ─── Test 7: Instruction Classification (start-over language) ──

next_step "Instruction Classification — 'Start Over' Detection"
echo ""
echo "  Actions:"
echo "  1. In the instruction text area, type:"
echo "     ${BOLD}'Completely rewrite this from scratch'${NC}"
echo "  2. Click '✨ Refine Speech'"
echo ""
echo "  ${BOLD}What to verify in Console:${NC}"
echo "  - Despite clicking Refine, the classifier should detect"
echo "    start-over intent and route to full generation:"
echo "    ${GREEN}actionType: 'start_over', model: 'gpt-4o'${NC}"
echo ""
echo "  ${BOLD}Why:${NC} The instruction classifier catches phrases like"
echo "  'rewrite', 'start over', 'from scratch', 'completely new'"
echo "  and upgrades to full GPT-4o generation as a failsafe."

wait_for_enter
check_result "Start-over language in refine box correctly upgrades to GPT-4o"

# ─── Test 8: Refresh with Updated Details ───────────────────

next_step "Refresh with Updated Details"
echo ""
echo "  Actions:"
echo "  1. Click '✏️ Edit Details' (or navigate back to edit form)"
echo "  2. Change something (e.g., the tone, or a name)"
echo "  3. A 'Refresh with Updated Details' button should appear"
echo "  4. Click it"
echo ""
echo "  ${BOLD}What to verify in Network tab:${NC}"
echo "  - ${GREEN}isStartOver: true${NC} (this is a full regeneration)"
echo "  - ${GREEN}model: 'gpt-4o'${NC}"
echo ""
echo "  ${BOLD}What to verify in UI:${NC}"
echo "  - New speech reflects the updated details"

wait_for_enter
check_result "'Refresh with Updated Details' triggers full GPT-4o regeneration"

# ─── Test 9: Usage Logging (DB check) ──────────────────────

next_step "Usage Logging in Database"
echo ""
if [ "$DB_CHECK" = "true" ]; then
  echo "  ${BOLD}Check the usage_logs table in your database.${NC}"
  echo ""
  echo "  You can run this SQL:"
  echo "  ${DIM}SELECT action, model, instruction, created_at"
  echo "  FROM usage_logs"
  echo "  ORDER BY created_at DESC"
  echo "  LIMIT 10;${NC}"
  echo ""
  echo "  ${BOLD}Expected:${NC}"
  echo "  - 'generate' actions → model = 'gpt-4o'"
  echo "  - 'refine' actions   → model = 'gpt-4o-mini'"
  echo "  - 'start_over' actions → model = 'gpt-4o'"
  echo "  - instruction column populated (truncated to 500 chars)"
  echo "  - Each test above should have a corresponding row"
  echo ""
  echo "  Also check the speech itself:"
  echo "  ${DIM}SELECT id, regen_count, refine_count"
  echo "  FROM speeches"
  echo "  ORDER BY updated_at DESC"
  echo "  LIMIT 1;${NC}"
  echo ""
  echo "  - refine_count should match number of refinement tests (2-3)"
  echo "  - regen_count should match number of start-over tests (2-3)"
else
  echo "  ${DIM}(DB check skipped — set DB_CHECK=true to enable)${NC}"
fi

wait_for_enter
check_result "Usage logs recorded with correct action types and models"

# ─── Test 10: Refine button disabled without instruction ────

next_step "Refine Button State"
echo ""
echo "  Actions:"
echo "  1. Clear the instruction text area (make it empty)"
echo "  2. Make sure no contextual pill is selected"
echo ""
echo "  ${BOLD}What to verify:${NC}"
echo "  - '✨ Refine Speech' button is ${RED}disabled${NC} (greyed out)"
echo "  - 'Start Over' button is still ${GREEN}enabled${NC}"
echo "  - This prevents accidental refinements with no instruction"

wait_for_enter
check_result "Refine button disabled when no instruction; Start Over always enabled"

# ─── Summary ────────────────────────────────────────────────

echo ""
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${CYAN}  Test Summary${NC}"
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "  ${GREEN}Passed: $passed${NC}"
echo -e "  ${RED}Failed: $failed${NC}"
echo -e "  Total:  $((passed + failed))"
echo ""

if [ $failed -eq 0 ]; then
  echo -e "  ${GREEN}${BOLD}All tests passed! Refinement architecture is working correctly.${NC}"
  echo ""
  echo -e "  ${BOLD}Cost savings summary:${NC}"
  echo "  - Quick pills:     GPT-4o → GPT-4o-mini  (~10x cheaper)"
  echo "  - Custom refine:   GPT-4o → GPT-4o-mini  (~10x cheaper)"
  echo "  - Start Over:      GPT-4o (unchanged — intentionally de-emphasized)"
  echo "  - Initial gen:     GPT-4o (unchanged)"
else
  echo -e "  ${RED}${BOLD}$failed test(s) failed. Review the failures above.${NC}"
fi

echo ""
