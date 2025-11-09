/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ backgroundColor: "red" }}>Hi div 1</div>
        <div style={{ backgroundColor: "green" }}>Hi div 2</div>
        <div style={{ backgroundColor: "yellow" }}>Hi div 3</div>
      </div> */}

      {/* <div className="grid grid-cols-3">
        <div className="bg-red-500 col-span-2">Hi tailwind 1</div>
        <div className="bg-cyan-300">Hi tailwind 2</div>
        <div className="bg-yellow-300">Hi tailwind 3</div>
        <div className="bg-green-300">Hi tailwind 4</div>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="bg-red-500">Hi tailwind 1</div>
        <div className="bg-cyan-300">Hi tailwind 2</div>
        <div className="bg-yellow-300">Hi tailwind 3</div>
        <div className="bg-green-300">Hi tailwind 4</div>
      </div>
    </>
  );
}

export default App;
