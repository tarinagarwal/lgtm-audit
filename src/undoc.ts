// Deliberately no JSDoc anywhere. If documentation agent runs, this will
// generate multiple "add JSDoc" findings. If disabled_agents mutes it,
// the review should contain zero documentation findings.
export function processOrder(orderId, userId, options) {
  const items = options.items;
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  return { orderId, userId, total, processed: Date.now() };
}
export function refund(orderId, amount) {
  return { orderId, refunded: amount };
}
export function cancel(orderId) {
  return { orderId, cancelled: true };
}
