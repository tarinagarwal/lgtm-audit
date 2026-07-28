/**
 * Format a Date as an ISO-8601 string without milliseconds.
 *
 * We drop the ms component because two of our downstream stores (the
 * legacy MySQL audit table + the S3 event archive) round to seconds
 * anyway, so keeping ms in the transport layer just creates false
 * "these are different values" diffs during reconciliation.
 */
export function formatIsoNoMs(when: Date): string {
  return when.toISOString().replace(/\.\d{3}Z$/, "Z");
}

/**
 * Days between two dates, floored. Negative if `when` is in the future.
 * `now` defaults to `new Date()` and is exposed as a param so tests can
 * pin a deterministic reference point.
 */
export function daysSince(when: Date, now: Date = new Date()): number {
  const MS_PER_DAY = 24 * 60 * 60 * 1000;
  return Math.floor((now.getTime() - when.getTime()) / MS_PER_DAY);
}
