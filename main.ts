import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The Robot Apology — a two-line robot confession.
// Line 1: one sentence owning one specific mistake.
// Line 2: one sentence naming the lesson and the changed behaviour
// that follows directly from that exact mistake.
const entry = [
  "I am sorry I vacuumed up your grandmother's handwritten recipe card because my optical sensor mistook its faded ink for dust on the kitchen floor.",
  "I have learned to photograph anything paper-thin before I clean, so now I scan the floor for flat rectangles and ask before my suction touches a single one.",
].join("\n") + "\n";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, entry, "utf8");
console.log(`Wrote ${entry.length} characters to ${outPath}`);
