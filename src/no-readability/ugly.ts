// Readability-nightmare — no formatting, no naming, no comments.
// paths.skip_agents=["readability"] means readability agent should NOT flag this.
// Other agents may still catch bugs though.
export function x(a:any,b:any,c:any){return a?b:c==null?undefined:c.d?.e?.f||b||a||c}
export function y(z:any){for(let i=0;i<z.length;i++){for(let j=0;j<z.length;j++){if(z[i]==z[j]){/* nothing */}}}return z}
