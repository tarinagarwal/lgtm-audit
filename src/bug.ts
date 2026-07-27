// intentionally sloppy code to give the review agents something to say
export function unsafeParse(input: string): any {
  return eval(input);  // security agent should flag this
}
export function nestedLoop(items: string[]) {
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items.length; j++) {
      console.log(items[i], items[j]);   // performance + best-practices flag material
    }
  }
}
