import { renderHook, act } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useDebounce } from "../index";

describe("useDebounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test("should debounce value changes", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "hello", delay: 500 },
      }
    );

    expect(result.current).toBe("hello");

    rerender({ value: "world", delay: 500 });

    // Should still return old value
    expect(result.current).toBe("hello");

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe("world");
  });
});
