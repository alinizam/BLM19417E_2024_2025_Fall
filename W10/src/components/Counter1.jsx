import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

export default function Counter1() {
  const [count, setCount] = useState(0);
  const [start, setCounter] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  },[start]);

  return(<div>
  <h1>I've rendered {count} times! </h1>;
  <button
        onClick={() => {
            setCounter(start+1);
        }}
      >
        Show name
      </button>

  </div>)
}

