// Real bug: SQL injection. Should be flagged even though .lgtm.yml is broken —
// pipeline must fall back to defaults, not fail the review.
import { db } from "./db";
export async function getUserById(id: string) {
  return db.query("SELECT * FROM users WHERE id = '" + id + "'");
}
