"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!city) return;
    router.push(`/city/${city}`);
  };

  return (
    <main className="p-8 font-sans bg-gradient-to-b from-sky-100 to-blue-200 min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-2xl mb-4">Időjárás kereső</h1>
      <form onSubmit={handleSearch} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Város neve..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className=" px-3 py-2 rounded-md bg-white"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Keresés
        </button>
      </form>
    </main>
  );
}