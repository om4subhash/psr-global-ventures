import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname);
const output = resolve(root, "dist");
const publicFiles = ["index.html", "styles.css", "script.js"];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

await Promise.all(
  publicFiles.map((file) => cp(resolve(root, file), resolve(output, file))),
);

console.log(`Built ${publicFiles.length} files in dist/`);
