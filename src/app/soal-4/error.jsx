"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4">Oops!</h1>
        <h2 className="text-xl text-gray-700 mb-4">Something went wrong</h2>
        <p className="text-red-700 mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
