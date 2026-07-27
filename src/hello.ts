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

// Test change 1
export function subtract(a: number, b: number): number {
  return a - b;
}

// Fresh push after webhook URL fix
export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) throw new Error("division by zero");
  return a / b;
}
