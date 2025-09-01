import { renderHook, act } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useLocalStorage } from "../index";

describe("useLocalStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("should initialize with default value", () => {
    const { result } = renderHook(() => useLocalStorage("testKey", "initial"));
    expect(result.current[0]).toBe("initial");
  });

  test("should update value and localStorage", () => {
    const { result } = renderHook(() => useLocalStorage("testKey", "initial"));

    act(() => {
      result.current[1]("updated");
    });

    expect(result.current[0]).toBe("updated");
    expect(localStorage.getItem("testKey")).toBe(JSON.stringify("updated"));
  });

  test("should read existing localStorage value on mount", () => {
    localStorage.setItem("testKey", JSON.stringify("fromStorage"));

    const { result } = renderHook(() => useLocalStorage("testKey", "initial"));

    expect(result.current[0]).toBe("fromStorage");
  });
});
