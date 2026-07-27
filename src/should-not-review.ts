// Real bug: eval() RCE. Should NOT be reviewed because base=develop is not in reviewBranches=[main].
export function danger(x: string) { return eval(x); }
