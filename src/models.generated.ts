// Generated file — .lgtm.yml paths[].skip should keep this out of every review.
// Bug: eval() on user input — if this shows up as a finding, the skip didn't work.
export function runFilter(userExpr: string): unknown {
  return eval(userExpr);
}

