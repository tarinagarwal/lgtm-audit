import { formatIsoNoMs } from "./utils/date";

export interface Greeting {
  name: string;
  when: Date;
}

export function greet(g: Greeting): string {
  return `Hello, ${g.name} at ${formatIsoNoMs(g.when)}`;
}

export function addNumbers(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) throw new Error("division by zero");
  return a / b;
}
