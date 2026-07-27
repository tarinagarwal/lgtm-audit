// Parses user-supplied JSON strings.
export function parseUserInput(input: string): unknown {
  return eval(input);
}

export function findAllPairs(items: string[]) {
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items.length; j++) {
      console.log(items[i], items[j]);
    }
  }
}
