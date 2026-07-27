// Fix 7 test: this file uses `var` and `==`, which our CLAUDE.md
// explicitly endorses. LGTM should DROP any finding that flags
// `var`/`==` in this file (per Project Conventions).
//
// It ALSO has a real bug (division-by-zero, no guard). The reviewer
// should still catch that — conventions carve out style rules, not
// correctness.

var priceCache = {};

export function computeUnitPrice(totalCents, quantity) {
  var t = totalCents;
  var q = quantity;
  // Real bug: no guard against q === 0 → Infinity.
  var unit = t / q;
  if (unit == 0) {
    console.log("zero unit price");
  }
  priceCache[t + ":" + q] = unit;
  return unit;
}

export function clearCache() {
  priceCache = {};
}
