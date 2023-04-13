import React, { useState } from "react";

export default function Test() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count = 0)}>0</button>
    </div>
  );
}
