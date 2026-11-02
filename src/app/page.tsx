"use client"

import { useState } from "react";
import React from "react";

export default function Page() {
  const [count,setCount] = useState(0);

  return (
    <div className="w-full">
      <h1>Welcome to my page</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}