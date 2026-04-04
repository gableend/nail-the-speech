#!/bin/bash
# ─────────────────────────────────────────────────────────────
# Interactive test script for the refinement & editing UX
# Tests: model routing, AI credits, undo, start-over confirm,
#        role-contextual pills, tone fix, labelling, Cmd+Z
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

# ─────────────────────────────────────────────────────────────

echo ""
echo -e "${CYAN}╔══════════════════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║     Refinement & Editing UX Test Suite               ║${NC}"
echo -e "${CYAN}║     Site: ${BOLD}$SITE${NC}"
echo -e "${CYAN}║                                                      ║${NC}"
echo -e "${CYAN}║     18 tests covering: model routing, AI credits,    ║${NC}"
echo -e "${CYAN}║     undo/redo, start-over confirm, role-contextual   ║${NC}"
echo -e "${CYAN}║     pills, tone fix, labelling, keyboard shortcuts   ║${NC}"
echo -e "${CYAN}╚══════════════════════════════════════════════════════╝${NC}"

echo ""
echo -e "  ${BOLD}Prerequisites:${NC}"
echo "  1. Logged in as a Pro user"
echo "  2. Browser DevTools open (Console + Network tabs)"
echo ""
echo -e "  ${DIM}Tip: Use ?demo=true to auto-fill form data${NC}"
wait_for_enter

# ═══════════════════════════════════════════════════════════════
# SECTION A: Core Generation & Routing
# ═══════════════════════════════════════════════════════════════

echo ""
echo -e "${BOLD}  ── Section A: Core Generation & Routing ──${NC}"

# ─── Test 1 ────────────────────────────────────────────────

next_step "Initial Speech Generation (GPT-4o)"
echo ""
echo "  Actions:"
echo "  1. Go to ${SITE}/generator?demo=true"
echo "  2. Walk through the form (data should be pre-filled)"
echo "  3. Click 'Generate My Speech' on the story step"
echo "  4. Wait for the speech to stream in"
echo ""
echo "  ${BOLD}What to verify:${NC}"
echo "  - Console: ${GREEN}actionType: 'generate', model: 'gpt-4o'${NC}"
echo "  - Speech is 4-5 minutes / 600+ words"
echo "  - Below the speech: ${GREEN}\"Edit directly above, or use AI below\"${NC} divider"
echo "  - 'Refine Your Speech' section with solid pink quick-action pills"
echo "  - Outlined '✨ Refine Speech' button (not greyed out — outlined pink)"
echo "  - De-emphasised 'Start Over' text button"
echo "  - ${RED}No${NC} credit counter visible yet (fresh speech = 0% used)"

wait_for_enter
check_result "Initial generation: GPT-4o, divider shown, no credit counter yet"

# ─── Test 2 ────────────────────────────────────────────────

next_step "Quick Refinement Pill — Overlay + Undo"
echo ""
echo "  Actions:"
echo "  1. Note the current speech content"
echo "  2. Click a solid pink quick-refinement pill"
echo ""
echo "  ${BOLD}What to verify during refinement:${NC}"
echo "  - Old speech stays visible with a ${GREEN}subtle white blur overlay${NC}"
echo "  - Centered pill shows: ${GREEN}\"Refining your speech...\"${NC} with spinner"
echo "  - Speech is NOT blanked out"
echo ""
echo "  ${BOLD}What to verify after completion:${NC}"
echo "  - Overlay disappears, new speech replaces old"
echo "  - Undo banner appears: ${GREEN}\"✨ Refined: [pill text]\"${NC}"
echo "  - Banner has ${GREEN}\"↩ Undo\"${NC} button"
echo "  - Console: ${GREEN}actionType: 'refine', model: 'gpt-4o-mini'${NC}"

wait_for_enter
check_result "Refinement: overlay during, undo banner after, GPT-4o-mini used"

# ─── Test 3 ────────────────────────────────────────────────

next_step "Undo Banner — Revert Refinement"
echo ""
echo "  Actions:"
echo "  1. The undo banner from Test 2 should still be visible"
echo "     (or repeat a quick pill refinement)"
echo "  2. Click the ${BOLD}\"↩ Undo\"${NC} button"
echo ""
echo "  ${BOLD}What to verify:${NC}"
echo "  - Speech reverts to the previous version"
echo "  - Undo banner disappears"
echo "  - Version counter (top-right of speech card) updates"

wait_for_enter
check_result "Undo reverts to previous version, banner dismissed"

# ─── Test 4 ────────────────────────────────────────────────

next_step "Cmd+Z / Ctrl+Z Keyboard Shortcut"
echo ""
echo "  Actions:"
echo "  1. Do another quick pill refinement to create a new version"
echo "  2. Click somewhere in the page (NOT in a text input)"
echo "  3. Press ${BOLD}Cmd+Z${NC} (Mac) or ${BOLD}Ctrl+Z${NC} (Windows)"
echo ""
echo "  ${BOLD}What to verify:${NC}"
echo "  - Speech reverts to previous version"
echo "  - Works the same as clicking the ↩ undo button"
echo ""
echo "  ${BOLD}Also verify it does NOT undo when:${NC}"
echo "  - Cursor is inside the instruction textarea"
echo "  - Cursor is inside a contentEditable paragraph"

wait_for_enter
check_result "Cmd+Z undoes speech version (but not inside text fields)"

# ─── Test 5 ────────────────────────────────────────────────

next_step "Custom Refinement + Min Length Validation"
echo ""
echo "  Actions:"
echo "  1. Type just 2-3 characters in the instruction box (e.g., 'hi')"
echo "  2. Click '✨ Refine Speech'"
echo ""
echo "  ${BOLD}What to verify:${NC}"
echo "  - Hint toast appears: ${GREEN}\"Describe your change in a bit more detail...\"${NC}"
echo "  - Refinement does NOT fire"
echo "  - Button is ${GREEN}outlined pink${NC} (not filled) — short text isn't 'ready'"
echo ""
echo "  Then:"
echo "  3. Type 10+ characters (e.g., 'Add a joke about how he is always late')"
echo "  4. Button should turn ${GREEN}solid pink${NC} (filled)"
echo "  5. Click it"
echo ""
echo "  ${BOLD}What to verify:${NC}"
echo "  - Refinement fires, speech is updated"
echo "  - Console: ${GREEN}actionType: 'refine', model: 'gpt-4o-mini'${NC}"

wait_for_enter
check_result "Min 10 chars enforced, outlined→filled transition, custom refine works"

# ─── Test 6 ────────────────────────────────────────────────

next_step "Voice Input for Instructions"
echo ""
echo "  Actions:"
echo "  1. Below the instruction textarea, find the ${BOLD}microphone button${NC}"
echo "  2. Click it and speak a refinement instruction"
echo "  3. Wait for transcription to appear in the textarea"
echo ""
echo "  ${BOLD}What to verify:${NC}"
echo "  - Voice input button is present below the textarea"
echo "  - Transcription appends to existing text (doesn't replace)"
echo "  - Character counter updates"
echo "  - Text capped at 500 chars even with long voice input"

wait_for_enter
check_result "Voice input works for refinement instructions"

# ─── Test 7 ────────────────────────────────────────────────

next_step "Start Over — Confirmation Dialog"
echo ""
echo "  Actions:"
echo "  1. Click the 'Start Over' button"
echo ""
echo "  ${BOLD}What to verify:${NC}"
echo "  - A modal dialog appears (NOT an immediate regeneration)"
echo "  - Title: ${GREEN}\"Start Over?\"${NC}"
echo "  - Body mentions version history is preserved"
echo "  - Shows credit cost: ${GREEN}\"Uses 3 AI edits (refinements use 1). You have X remaining.\"${NC}"
echo "  - Two buttons: 'Cancel' and 'Yes, Start Over'"
echo ""
echo "  2. Click 'Cancel' — dialog closes, nothing happens"
echo "  3. Click 'Start Over' again, then 'Yes, Start Over'"
echo ""
echo "  ${BOLD}What to verify after confirming:${NC}"
echo "  - Speech clears and streams a completely new version"
echo "  - Console: ${GREEN}actionType: 'start_over', model: 'gpt-4o'${NC}"
echo "  - Undo banner shows: ${GREEN}\"🔄 New speech generated\"${NC}"

wait_for_enter
check_result "Start Over shows confirm dialog with credit info, GPT-4o used"

# ─── Test 8 ────────────────────────────────────────────────

next_step "Instruction Classification — Start-Over Detection"
echo ""
echo "  Actions:"
echo "  1. Type in the instruction box:"
echo "     ${BOLD}'Completely rewrite this from scratch'${NC}"
echo "  2. Click '✨ Refine Speech'"
echo ""
echo "  ${BOLD}What to verify:${NC}"
echo "  - Despite clicking Refine, server-side classifier detects"
echo "    start-over intent and routes to full generation"
echo "  - Console: ${GREEN}actionType: 'start_over', model: 'gpt-4o'${NC}"
echo ""
echo "  ${DIM}(Phrases: 'rewrite', 'start over', 'from scratch', 'completely new')${NC}"

wait_for_enter
check_result "Start-over language in refine box upgrades to GPT-4o"

# ═══════════════════════════════════════════════════════════════
# SECTION B: AI Credit System
# ═══════════════════════════════════════════════════════════════

echo ""
echo -e "${BOLD}  ── Section B: AI Credit System ──${NC}"

# ─── Test 9 ────────────────────────────────────────────────

next_step "Credit Counter Visibility"
echo ""
echo "  ${BOLD}Context:${NC} 30 credits total. Refine=1, Start Over=3."
echo "  By now you've used several AI edits in Tests 2-8."
echo ""
echo "  ${BOLD}What to verify in the 'Refine Your Speech' header:${NC}"
echo "  - If < 50% used: ${GREEN}No counter visible${NC} (user feels free)"
echo "  - If 50-70% used: Subtle grey text: ${GREEN}\"X AI edits remaining\"${NC}"
echo "  - If 70%+ used: Warm amber text: ${GREEN}\"X AI edits remaining\"${NC}"
echo ""
echo "  ${DIM}Formula: credits_used = (start_overs × 3) + (refinements × 1)${NC}"
echo "  ${DIM}Counter appears when credits_used >= 15 (50% of 30)${NC}"

wait_for_enter
check_result "Credit counter appears at correct threshold with proper styling"

# ─── Test 10 ───────────────────────────────────────────────

next_step "Credit Cost in Start Over Dialog"
echo ""
echo "  Actions:"
echo "  1. Click 'Start Over' to open the confirmation dialog"
echo ""
echo "  ${BOLD}What to verify:${NC}"
echo "  - Below the description, warm amber text shows:"
echo "    ${GREEN}\"Uses 3 AI edits (refinements use 1). You have X remaining.\"${NC}"
echo "  - The number matches what you see in the header counter"
echo ""
echo "  2. Click 'Cancel' to close"

wait_for_enter
check_result "Start Over dialog shows accurate credit cost and remaining"

# ─── Test 11 ───────────────────────────────────────────────

next_step "Inline Editing Nudge (in Undo Banner)"
echo ""
echo "  ${BOLD}Context:${NC} When > 50% of credits are used, the undo banner"
echo "  should nudge users toward free inline editing."
echo ""
echo "  Actions:"
echo "  1. Do a quick refinement pill click"
echo ""
echo "  ${BOLD}What to verify in the undo banner:${NC}"
echo "  - If < 50% used: Just ${GREEN}\"✨ Refined: [pill text]\"${NC} + Undo"
echo "  - If ≥ 50% used: Additionally shows:"
echo "    ${GREEN}\"— or click any paragraph to edit for free\"${NC}"

wait_for_enter
check_result "Undo banner includes inline editing nudge at 50%+ usage"

# ═══════════════════════════════════════════════════════════════
# SECTION C: Role-Contextual UI
# ═══════════════════════════════════════════════════════════════

echo ""
echo -e "${BOLD}  ── Section C: Role-Contextual Suggestions ──${NC}"

# ─── Test 12 ───────────────────────────────────────────────

next_step "Quick Pills Are Role-Specific"
echo ""
echo "  ${BOLD}What to verify:${NC}"
echo "  Look at the solid pink 'Quick refinements' pills."
echo "  They should be specific to the speech role, e.g.:"
echo ""
echo "  - Best Man: ${GREEN}\"More about my friendship with [groom]\"${NC}"
echo "  - Father of Bride: ${GREEN}\"More about watching [bride] grow up\"${NC}"
echo "  - Groom: ${GREEN}\"More gratitude to [bride]'s family\"${NC}"
echo "  - Siblings: ${GREEN}\"Add more sibling banter\"${NC}"
echo ""
echo "  Also check tone-based pills:"
echo "  - Funny/Clean Roast: ${GREEN}\"Make it more heartfelt\", \"Add cleverer jokes\"${NC}"
echo "  - Sentimental: ${GREEN}\"Add a touch of humour\", \"Make it more emotional\"${NC}"
echo ""
echo "  ${DIM}Demo uses best-man role. To test other roles, generate a new speech.${NC}"

wait_for_enter
check_result "Quick pills show role-specific and tone-specific suggestions"

# ─── Test 13 ───────────────────────────────────────────────

next_step "Contextual Pills Are Role-Specific"
echo ""
echo "  ${BOLD}What to verify:${NC}"
echo "  The 'Add specific details' contextual pills (with → arrows)"
echo "  should also be role-specific:"
echo ""
echo "  - Best Man: ${GREEN}\"Add a friendship anecdote\"${NC}, ${GREEN}\"Include advice for [groom]\"${NC}"
echo "  - Father of Bride: ${GREEN}\"Add a childhood memory\"${NC}, ${GREEN}\"Include fatherly wisdom\"${NC}"
echo "  - Maid of Honor: ${GREEN}\"Add a favourite moment with [bride]\"${NC}"
echo "  - Groom/Bride: ${GREEN}\"Add how we knew it was love\"${NC}"

wait_for_enter
check_result "Contextual pills are role-specific with names injected"

# ═══════════════════════════════════════════════════════════════
# SECTION D: Speech Details & Labelling
# ═══════════════════════════════════════════════════════════════

echo ""
echo -e "${BOLD}  ── Section D: Speech Details & Labelling ──${NC}"

# ─── Test 14 ───────────────────────────────────────────────

next_step "Tone Pill Fix in Edit Details"
echo ""
echo "  Actions:"
echo "  1. Click the 'Speech Details' expandable section"
echo ""
echo "  ${BOLD}What to verify:${NC}"
echo "  - Tone section shows ${GREEN}all 14 tones${NC} with emojis (not just 4)"
echo "  - The current tone is ${GREEN}highlighted in solid pink${NC}"
echo "    (previously no tone was highlighted — this was a bug)"
echo "  - Click a different tone — it highlights, previous deselects"
echo "  - Tone emojis match: 💖 Heartfelt, 😄 Funny, 📷 Nostalgic, etc."

wait_for_enter
check_result "All 14 tones shown with emojis, current tone highlighted correctly"

# ─── Test 15 ───────────────────────────────────────────────

next_step "Tone Display in Summary Stats"
echo ""
echo "  ${BOLD}What to verify:${NC}"
echo "  - The tone stat box (in the 4-box grid: Words, Minutes, Tone, Role)"
echo "  - Shows the correct emoji for the selected tone (not always 😏)"
echo "  - Shows the correct label (e.g., 'Heartfelt' not 'heartfelt')"

wait_for_enter
check_result "Tone stat box shows correct emoji and properly capitalised label"

# ─── Test 16 ───────────────────────────────────────────────

next_step "No 'Pro' Labelling — Outcome-Focused Copy"
echo ""
echo "  ${BOLD}What to verify in the Speech Details section:${NC}"
echo "  - Badge says ${GREEN}\"Add more detail for a better speech\"${NC}"
echo "    (NOT 'Add Pro details for a better speech')"
echo "  - When details are filled: ${GREEN}\"Extra details added\"${NC}"
echo "    (NOT 'Pro details added')"
echo "  - Section header: ${GREEN}\"Make It Personal\"${NC}"
echo "    (NOT 'Pro Details')"
echo "  - Sub-text: ${GREEN}\"The more you share, the more unique and heartfelt...\"${NC}"
echo ""
echo "  ${BOLD}Also check the Bonus Options section:${NC}"
echo "  - Should NOT contain the word 'Pro' anywhere"

wait_for_enter
check_result "All 'Pro' terminology replaced with outcome-focused language"

# ─── Test 17 ───────────────────────────────────────────────

next_step "Section Divider Between Speech & AI Tools"
echo ""
echo "  ${BOLD}What to verify:${NC}"
echo "  - Between the speech card and the 'Refine Your Speech' section"
echo "  - A centred divider line with text:"
echo "    ${GREEN}\"— Edit directly above, or use AI below —\"${NC}"
echo "  - Muted colour, thin horizontal rules on either side"

wait_for_enter
check_result "Divider clearly separates inline editing from AI refinement"

# ═══════════════════════════════════════════════════════════════
# SECTION E: Data Integrity
# ═══════════════════════════════════════════════════════════════

echo ""
echo -e "${BOLD}  ── Section E: Data Integrity ──${NC}"

# ─── Test 18 ───────────────────────────────────────────────

next_step "Usage Logging & Credit Counters in Database"
echo ""
if [ "$DB_CHECK" = "true" ]; then
  echo "  ${BOLD}Check usage_logs:${NC}"
  echo "  ${DIM}SELECT action, model, instruction, created_at"
  echo "  FROM usage_logs ORDER BY created_at DESC LIMIT 10;${NC}"
  echo ""
  echo "  Expected:"
  echo "  - 'generate'   → model = 'gpt-4o'"
  echo "  - 'refine'     → model = 'gpt-4o-mini'"
  echo "  - 'start_over' → model = 'gpt-4o'"
  echo "  - instruction column populated (max 500 chars)"
  echo ""
  echo "  ${BOLD}Check speech counters:${NC}"
  echo "  ${DIM}SELECT id, regen_count, refine_count"
  echo "  FROM speeches ORDER BY updated_at DESC LIMIT 1;${NC}"
  echo ""
  echo "  - refine_count = number of refinements done"
  echo "  - regen_count = number of start-overs done"
  echo "  - credits_used = (regen_count × 3) + refine_count"
  echo ""
  echo "  ${BOLD}Check SSE completion events (Network tab):${NC}"
  echo "  - Last complete event should include:"
  echo "    ${GREEN}regenCount${NC} and ${GREEN}refineCount${NC} fields"
else
  echo "  ${DIM}(DB check skipped — set DB_CHECK=true to enable)${NC}"
fi

wait_for_enter
check_result "Usage logs, speech counters, and SSE events all correct"

# ═══════════════════════════════════════════════════════════════
# Summary
# ═══════════════════════════════════════════════════════════════

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
  echo -e "  ${GREEN}${BOLD}All 18 tests passed!${NC}"
  echo ""
  echo -e "  ${BOLD}Architecture summary:${NC}"
  echo "  ┌────────────────────────┬─────────────┬─────────┐"
  echo "  │ Action                 │ Model       │ Credits │"
  echo "  ├────────────────────────┼─────────────┼─────────┤"
  echo "  │ Initial generation     │ GPT-4o      │ 0       │"
  echo "  │ Quick pill refinement  │ GPT-4o-mini │ 1       │"
  echo "  │ Custom refinement      │ GPT-4o-mini │ 1       │"
  echo "  │ Start Over             │ GPT-4o      │ 3       │"
  echo "  │ Inline paragraph edit  │ None        │ 0       │"
  echo "  └────────────────────────┴─────────────┴─────────┘"
  echo ""
  echo "  Budget: 30 credits per speech"
  echo "  = up to 30 refinements, or 10 start-overs, or any mix"
else
  echo -e "  ${RED}${BOLD}$failed test(s) failed. Review the failures above.${NC}"
fi

echo ""
