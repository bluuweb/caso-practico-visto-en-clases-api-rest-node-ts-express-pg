export const sum = (a: number, b: number) => a + b;

import { describe, expect, it } from "vitest";

describe("func sum", () => {
  it("add 1 + 2 returns 3", () => {
    const a = 1;
    const b = 2;

    const result = sum(a, b);

    expect(result).toBe(3);
  });
});
