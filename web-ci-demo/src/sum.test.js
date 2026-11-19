import { describe, it, expect } from "vitest";
import { sum } from "./sum.js";

describe("sum", () => {
  it("складывает числа", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
