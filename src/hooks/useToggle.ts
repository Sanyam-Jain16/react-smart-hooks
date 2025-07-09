import { useCallback, useState } from "react";

function useToggle(
  initialValue: boolean = false
): [boolean, () => void, (val: boolean) => void] {
  const [state, setState] = useState<boolean>(initialValue);

  const toggle = useCallback(() => setState((prev) => !prev), []);
  const set = useCallback((val: boolean) => setState(val), []);

  return [state, toggle, set];
}

export default useToggle;
