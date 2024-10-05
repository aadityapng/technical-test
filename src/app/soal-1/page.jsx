"use client";
import { useState } from "react";

function PalindromeChecker() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  const isPolindrome = (x) => {
    if (x < 0) return false;

    let reversed = 0;
    let original = x;

    while (x > 0) {
      reversed = reversed * 10 + (x % 10);
      x = Math.floor(x / 10);
    }
    if (original !== reversed) {
      return false;
    }
    console.log("reversed", reversed);

    return original === reversed;
  };

  const handleCheck = () => {
    const numValue = parseInt(number);
    console.log("numValue", numValue);
    setResult(isPolindrome(numValue));
    console.log(isPolindrome(numValue));
    
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl text-center font-bold mb-4">Palindrome Number Checker</h1>
      <div className="mb-4">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter a number"
        />
      </div>
      <button
        onClick={handleCheck}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Check Palindrome
      </button>
      {result !== null && (
        <div
          className={`mt-4 p-3 rounded-md ${
            result ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <p className="text-center font-semibold">
            {result ? "✅ Is a palindrome" : "❌ Not a palindrome"}
          </p>
        </div>
      )}
    </div>
  );
}

export default PalindromeChecker;
