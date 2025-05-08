import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incCount() {
    setCount(count + 2);
  }

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase</button>
    </div>
  );
}
 