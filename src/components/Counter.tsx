import { useState } from 'preact/hooks';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <span class="text-lg text-yellow-200">{count}</span>
      <button
        class="border px-4 py-2 text-xl"
        onClick={() => setCount((count) => count + 1)}
      >
        +
      </button>
      <button
        class="border px-4 py-2 text-xl"
        onClick={() => setCount((count) => count - 1)}
      >
        -
      </button>
    </>
  );
}
