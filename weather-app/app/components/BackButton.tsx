"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer hover:shadow-md transition"
    >
      Új keresés
    </button>
  );
}