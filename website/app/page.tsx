"use client";

import { useState } from "react";

export default function Home() {
  const [postcode, setPostcode] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        Find free parks near you
      </h1>
      <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Filter by playgrounds, accessibility, parking, walking trails and more.
      </p>

      {/* Postcode input */}
      <div className="mt-6">
        <input
          type="text"
          placeholder="Enter your postcode"
          className="border px-3 py-2 rounded mr-2"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => alert(`You entered: ${postcode}`)}
        >
          Search
        </button>
      </div>
    </main>
  );
}
