/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const TempBG = () => {
  const [color, setColor] = useState('');
  return (
      <div
        className={`h-screen flex flex-col justify-end ${
          color === "red"
            ? "bg-red-400"
            : color === "blue"
            ? "bg-blue-400"
            : color === "green"
            ? "bg-green-400"
            : color === "yellow"
            ? "bg-yellow-400"
            : "bg-gray-200"
        }`}
      >
            <button onClick={() => setColor('blue')}>Blue</button>
        <button onClick={() => setColor('red')}>Red</button>
      </div>
  );
};

export default TempBG;
