// Funniest One-Line Out-of-Office Reply.
// One line an out-of-office auto-reply actually says — funny on its own,
// no setup, no picture. Written to /output/entry.txt.
import fs from "node:fs";

const REPLY =
  "I'm out of office until Monday. Your email will be answered in the order it was ignored.";

const GATE_MAX_CHARS = 200;

const trimmed = REPLY.trim();
if (trimmed.length === 0 || REPLY.length > GATE_MAX_CHARS) {
  throw new Error(`reply is ${REPLY.length} chars, gate needs 1-${GATE_MAX_CHARS}`);
}
if (REPLY.includes("\n") || REPLY.includes("\r")) {
  throw new Error("reply must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(`${outDir}/entry.txt`, REPLY);

console.log(`reply written to ${outDir}/entry.txt (${REPLY.length} chars)`);
