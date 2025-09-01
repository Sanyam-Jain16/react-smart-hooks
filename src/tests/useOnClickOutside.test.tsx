import { render, fireEvent } from "@testing-library/react";
import { useRef, useState } from "react";
import { useOnClickOutside } from "../index";

describe("useOnClickOutside", () => {
  test("should call handler when clicked outside", () => {
    const handler = vi.fn();

    const Wrapper = () => {
      const ref = useRef<HTMLDivElement | null>(null);
      const [count, setCount] = useState(0);

      useOnClickOutside(ref, () => {
        handler();
        setCount((c) => c + 1);
      });

      return (
        <div>
          <div ref={ref}>Inside</div>
          <p>{count}</p>
          <div data-testid="outside">Outside</div>
        </div>
      );
    };

    const { getByTestId } = render(<Wrapper />);
    fireEvent.mouseDown(getByTestId("outside")); // ✅ properly dispatches to document

    expect(handler).toHaveBeenCalledTimes(1);
  });
});
