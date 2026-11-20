// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: this program only carries POST.json from
// the repository root to the output directory, where the gate reads the
// post's address. It never touches the network, the clock, or files outside
// the repository, so the grader's two runs write the same bytes.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

mkdirSync(OUTPUT_DIR, { recursive: true });

let post: string;
try {
  post = readFileSync(source, 'utf8');
} catch (err) {
  console.error(`could not read POST.json from ${source}: ${(err as Error).message}`);
  process.exit(1);
}

// The gate wants a JSON object naming the post, so refuse anything else
// here instead of handing it a file it cannot read.
const parsed: unknown = JSON.parse(post);
if (typeof parsed !== 'object' || parsed === null || !('url' in parsed)) {
  console.error('POST.json must be a JSON object with a url field');
  process.exit(1);
}

writeFileSync(target, post);
