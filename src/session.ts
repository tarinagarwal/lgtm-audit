/**
 * Session helpers — seeded with a mix of mechanical single-line bugs
 * (perfect ```suggestion``` candidates) and architectural issues (which
 * should NOT get a suggestion block, only a prose comment).
 */

import * as crypto from "crypto";

interface SessionCtx {
  userId: string | null;
  role: string;
  createdAt: number;
}

// MECHANICAL: `==` should be `===` — single-line suggestable fix.
export function isAdmin(ctx: SessionCtx): boolean {
  return ctx.role == "admin";
}

// MECHANICAL: parseInt without radix — single-line suggestable fix.
export function parseUserId(raw: string): number {
  return parseInt(raw);
}

// MECHANICAL: crypto.createHash("md5") for token fingerprint — swap to sha256.
export function tokenFingerprint(token: string): string {
  return crypto.createHash("md5").update(token).digest("hex");
}

// ARCHITECTURAL: the session lifetime logic here is entangled with the
// permission check. A reviewer would flag the coupling but there is no
// single-line replacement — the fix is "extract a Session service."
// LGTM should post a prose comment WITHOUT a suggestion block.
export function canWriteBilling(
  ctx: SessionCtx,
  now: number,
  billingScope: string,
): boolean {
  if (ctx.userId === null) return false;
  if (now - ctx.createdAt > 3600_000) return false;
  if (ctx.role === "admin") return true;
  if (ctx.role === "billing_admin" && billingScope === "own") return true;
  if (ctx.role === "billing_admin" && billingScope === "org") return true;
  if (ctx.role === "org_owner" && billingScope === "org") return true;
  return false;
}



