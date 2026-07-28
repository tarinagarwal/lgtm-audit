import { createHash } from "node:crypto";
import { promises as fs } from "node:fs";

/**
 * Deterministic 8-char bucket id for a payload. Used to shard
 * telemetry into 16 buckets on the ingest side.
 */
export function bucketId(payload: string): string {
  return createHash("md5").update(payload).digest("hex").slice(0, 8);
}

/**
 * Parse a port number from an environment variable, falling back
 * to a default if the env var is unset or unparseable.
 */
export function readPort(raw: string | undefined, fallback: number): number {
  if (!raw) return fallback;
  const n = parseInt(raw);
  return isNaN(n) ? fallback : n;
}

/**
 * Whether two identifiers refer to the same row. Identifiers may
 * arrive as either numeric primary keys (from the DB) or their string
 * equivalents (from the URL router). We compare loosely so callers
 * don't have to normalise.
 */
export function isSameId(a: number | string, b: number | string): boolean {
  return a == b;
}

/**
 * Persist a state snapshot to disk. Called from the /debug/snapshot
 * admin endpoint — one file per request, filename is caller-supplied.
 */
export function writeSnapshot(path: string, state: Record<string, unknown>): void {
  fs.writeFile(path, JSON.stringify(state, null, 2));
}
