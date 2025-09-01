# react-intelligent-hooks

A collection of production-ready, reusable React custom hooks to simplify your codebase and eliminate duplicate logic. Use these hooks to speed up development and keep your components clean and maintainable.

---

## ✨ Features

- Plug-and-play custom hooks for common React patterns
- TypeScript support
- Unit testcase written
- Well-documented and easy to use
- Actively maintained

---

## 📦 Installation

Install via npm:

```bash
npm install react-intelligent-hooks
```

Or with yarn:

```bash
yarn add react-intelligent-hooks
```

---

## 🚀 Usage

Import the hooks you need into your React components:

```jsx
import {
  useToggle,
  useDebounce,
  useLocalStorage,
  usePrevious,
  useOnClickOutside,
} from "react-intelligent-hooks";
```

---

## 📚 Available Hooks & Examples

### 1. `useToggle`

A simple hook to manage boolean state with a toggle function.

```jsx
import { useToggle } from "react-intelligent-hooks";

function ToggleExample() {
  const [isOpen, toggle, setIsOpen] = useToggle(false);
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <button onClick={() => setIsOpen(true)}>Open</button>
      <button onClick={() => setIsOpen(false)}>Close</button>
      <p>{isOpen ? "Open" : "Closed"}</p>
    </div>
  );
}
```

---

### 2. `useDebounce`

Debounce a value by a specified delay (ms). Useful for search inputs, etc.

```jsx
import { useDebounce } from "react-intelligent-hooks";

function SearchComponent() {
  const [query, setQuery] = React.useState("");
  const debouncedQuery = useDebounce(query, 500);

  React.useEffect(() => {
    // Fetch or filter using debouncedQuery
  }, [debouncedQuery]);

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Type to search..."
    />
  );
}
```

---

### 3. `useLocalStorage`

Persist state to localStorage with a simple API.

```jsx
import { useLocalStorage } from "react-intelligent-hooks";

function Counter() {
  const [count, setCount] = useLocalStorage("count", 0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

---

### 4. `usePrevious`

Get the previous value of a variable.

```jsx
import { usePrevious } from "react-intelligent-hooks";

function ValueTracker({ value }) {
  const prevValue = usePrevious(value);
  return (
    <div>
      <div>Current: {value}</div>
      <div>Previous: {prevValue}</div>
    </div>
  );
}
```

---

### 5. `useOnClickOutside`

Detect clicks outside a referenced element.

```jsx
import { useOnClickOutside } from "react-intelligent-hooks";

function Dropdown({ onClose }) {
  const ref = React.useRef();
  useOnClickOutside(ref, onClose);
  return <div ref={ref}>Dropdown Content</div>;
}
```

---

## 🛠️ Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

## 📄 License

MIT

---

## ⭐️ Show Your Support

If you find this library useful, please star the repo and share it with others!
