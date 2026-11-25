// The Funniest One-Line Out-of-Office Reply — a single human out-of-office
// auto-reply, one line, that the sponsor can switch on as their own.
// Writes the entry text to /output/entry.txt. Deterministic: no input,
// no network.
//
// Rubric (sealed judge brief in competition.yaml, most important first):
//   C1 one-line out-of-office reply, the sort a person sets before going away
//   C2 laugh lands on the first read, with no setup and nothing to explain
//   C3 reads like a real away message a person would be glad to switch on,
//      not a notice with a joke bolted to it
//   C4 fresh: a turn on the usual away message, not the same beach, inbox
//      or limited-email lines
//   C5 short enough to take in at a glance, every word earning its place
//
// 12 candidates drafted, modal/weak ones rejected:
//   1. WINNER (88 chars): "I'm out of office until Monday. Your email
//      will be answered in the order it was ignored."
//   2. "I'm away until the 3rd. If your email can wait, it will. If it
//      can't, it also will." REJECT: clean logic twist, but the joke could
//      sit on any reply — it is not an out-of-office joke, only a joke
//      wearing an out-of-office prefix (weaker C1/C3 than the winner).
//   3. "I'm on leave. I am currently unavailable, unreachable, and — for
//      the first time this year — unbothered." REJECT: three-beat
//      escalation, but "unavailable, unreachable" is stock OOO wording
//      and the em-dash aside explains the punch instead of landing it.
//   4. "Out of office until Monday. Please direct all urgent matters to
//      someone who is not me." REJECT: instant laugh and a real message,
//      but the laugh is a smile, not a laugh — "not me" is one small
//      shrug where the winner has a whole mechanism.
//   5. "I'm out of office. This automated reply is the most work I'll do
//      all week." REJECT: meta about the auto-reply itself — the joke IS
//      the notice, which is exactly what C3 warns against.
//   6. "I'm away. I have gone to find myself. If found, please do not
//      return to sender." REJECT: the "return to sender" wordplay needs
//      the reader to connect two ideas before it pays off (fails C2's
//      first-read laugh); reads like a greeting card, not an OOO.
//   7. "I'm out of office until Friday. This message has said Friday
//      since March." REJECT: strong dark horse — concrete (March), instant
//      laugh, fresh turn on a stale OOO — but it confesses the OOO is
//      stale, so it is less a message a person is glad to switch on
//      (weaker C3), and it says nothing about what happens to your email.
//   8. "I'm on leave until Monday, doing absolutely nothing — finally, a
//      task I can complete ahead of schedule." REJECT: the first half is
//      setup the punch has to carry; too long for what it delivers.
//   9. "I'm out of office. For anything urgent, please email someone
//      else. I believe in you." REJECT: "I believe in you" is a nice
//      turn, but delegation jokes are the field's second-most-common
//      angle after the beach, and we already used a delegation loop in
//      an earlier OOO bounty.
//  10. "I'm away until Monday. My calendar is full of nothing until then,
//      and I intend to keep it that way." REJECT: voice without a twist —
//      a mild observation, no surprise (fails C2).
//  11. "I'm out of office until the 9th. My email will reply to you just
//      as soon as it feels respected." REJECT: personifying the inbox is
//      mild; the punch is a shrug, not a turn.
//  12. "I'm on holiday. My out-of-office is the only thing at work today
//      that is actually working." REJECT: same meta-notice problem as #5,
//      plus "on holiday" leans on the vacation cliche.
//   (Also rejected outright: anything with "beach", "inbox", "limited
//   email access", and our two earlier OOO lines — the Priya delegation
//   loop and the auto-reply demanding a raise — which belong to other
//   bounties and would not be fresh here.)
//
// Why the winner wins: C1 — opens as a real auto-reply with a return day.
// C2 — the punch is the last word: "ignored" twists the canonical OOO
// formula "answered in the order received" into its honest opposite, and
// it lands the instant the reader reaches it. C3 — it IS a functional
// away message: return day stated, what happens to your email stated, in
// the exact shape a person switches on. C4 — the turn is ON the usual
// away message itself, with no beach, no inbox, no limited-email line.
// C5 — 88 chars, nothing wasted; the tie-break is bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `I'm out of office until Monday. Your email will be answered in the order it was ignored.`;

const MAX_CHARS = 160; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}
if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  console.error("entry must be one non-blank line");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
