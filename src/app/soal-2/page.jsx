"use client";
import { useState } from "react";

function CatKitty() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const handleCatKitty = () => {
    const num = parseInt(input);
    const output = [];

    if (num > 0) {
      for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          output.push("CatKitty");
        } else if (i % 5 === 0) {
          output.push("Kitty");
        } else if (i % 3 === 0) {
          output.push("Cat");
        } else {
          output.push(i);
        }
      }
      setResults(output);
    } else {
      setResults(["Please enter a valid positive number"]);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">CatKitty Checker</h1>
      <div className="mb-4">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter a positive number"
        />
      </div>
      <button
        onClick={handleCatKitty}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Check CatKitty
      </button>
      <div className="mt-4">
        {results.map((result, index) => (
          <div
            key={index}
            className="p-2 shadow-lg bg-gray-100 text-center"
          >
            {result}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatKitty;
