// *** Libraries *** 
import React from "react";
// *** Hooks *** 
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello World!</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me! | count: {count}
      </button>   
    </>
  );
}

export default App;
