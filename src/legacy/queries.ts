// Under paths.max_severity=medium — even a critical bug should render as medium.
import { db } from "./db";
export async function userByEmail(email: string) {
  // SQL injection — normally CRITICAL; severity_overrides bumps sql-injection→critical,
  // then paths.max_severity caps to medium. Net: MEDIUM.
  return db.query("SELECT * FROM users WHERE email = '" + email + "'");
}
