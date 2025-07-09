import { renderHook, act } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useToggle } from "../index";

describe("useToggle", () => {
  test("should toggle boolean value", () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1](); // toggle
    });

    expect(result.current[0]).toBe(true);

    act(() => {
      result.current[2](false); // set to false
    });

    expect(result.current[0]).toBe(false);
  });

  test("should respect initial value", () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current[0]).toBe(true);
  });
});
