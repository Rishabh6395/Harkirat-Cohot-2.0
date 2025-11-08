import React, { useState } from "react";

const ParaGen = () => {
  const [length, setLength] = useState(""); // user input
  const [paragraph, setParagraph] = useState(""); // generated text

  // basic lorem words
  const words = [
    "lorem", "ipsum", "dolor", "sit", "amet", "consectetur",
    "adipiscing", "elit", "sed", "do", "eiusmod", "tempor",
    "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua"
  ];

  const generateParagraph = () => {
    const num = parseInt(length);
    if (!num || num <= 0) {
      setParagraph("Enter a valid positive number.");
      return;
    }

    let result = [];
    for (let i = 0; i < num; i++) {
      const word = words[Math.floor(Math.random() * words.length)];
      result.push(word);
    }

    // join into a readable paragraph
    const text = result.join(" ") + ".";
    setParagraph(text.charAt(0).toUpperCase() + text.slice(1));
  };

  return (
    <div className="h-screen flex flex-col items-center text-center">
      <div className="font-semibold mt-12 text-3xl">Paragraph Generator</div>

      <div className="flex items-center mt-8">
        <input
          className="border px-4 py-2 mr-4"
          placeholder="Enter word count"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          type="number"
        />
        <button
          className="bg-red-400 text-white rounded-xl h-12 px-6 hover:bg-red-500"
          onClick={generateParagraph}
        >
          Generate
        </button>
      </div>

      <div className="mt-8 max-w-3xl px-6 text-lg leading-relaxed">
        {paragraph}
      </div>
    </div>
  );
};

export default ParaGen;
