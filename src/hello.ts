export interface Greeting {
  name: string;
  when: Date;
}

export function greet(g: Greeting): string {
  return `Hello, ${g.name} at ${g.when.toISOString()}`;
}

export function addNumbers(a: number, b: number): number {
  return a + b;
}
