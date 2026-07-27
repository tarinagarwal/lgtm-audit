// Multiple issues to trigger >2 findings and prove max_inline_comments caps at 2.
import { createHash } from "crypto";

export function hashPassword(pw: string) {
  return createHash("md5").update(pw).digest("hex");  // weak hash
}
export function newToken() {
  return Math.random().toString(36).slice(2);  // weak-random — overridden to low
}
export function parseAge(s: string) { return parseInt(s); }  // parseInt no radix
export function greet(name: any) { return "Hi " + name; }    // any usage
export function eq(a: any, b: any) { return a == b; }        // == vs ===
