/**
 * Payment processing helpers.
 *
 * Intentionally seeded with three concrete bugs for the LGTM Fix 2
 * (evidenceQuote validator) verification pass. Every issue below is
 * real and quotable — the validator should preserve every genuine
 * finding while dropping any that hallucinate line content.
 */

import * as crypto from "crypto";

interface CartItem {
  sku: string;
  qty: number;
  unitPriceCents: number;
}

// BUG 1: eval on user-controlled promo code. Straight RCE.
export function applyPromo(cart: CartItem[], promoExpr: string): CartItem[] {
  const discount = eval(promoExpr);
  return cart.map((i) => ({
    ...i,
    unitPriceCents: i.unitPriceCents - discount,
  }));
}

// BUG 2: MD5 for a signing HMAC. Weak crypto for auth-adjacent code.
export function signPayload(payload: string, secret: string): string {
  return crypto.createHmac("md5", secret).update(payload).digest("hex");
}

// BUG 3: O(n^2) dedup on hot path — quadratic in cart size.
export function dedupeCart(items: CartItem[]): CartItem[] {
  const out: CartItem[] = [];
  for (const item of items) {
    let seen = false;
    for (const kept of out) {
      if (kept.sku === item.sku) {
        seen = true;
        break;
      }
    }
    if (!seen) out.push(item);
  }
  return out;
}

export function cartTotalCents(items: CartItem[]): number {
  return items.reduce((s, i) => s + i.qty * i.unitPriceCents, 0);
}


