"use client";

import BackButton from "@/app/components/BackButton";

export default function Error({ error }: { error: Error; }) {
    return (
        <main className="p-8 flex flex-col justify-center items-center h-screen bg-gradient-to-b from-sky-100 to-blue-200">
            <h1 className="text-xl font-bold mb-4">⚠️ Hiba történt</h1>
            <p className="mb-4">{error.message}</p>
            <BackButton />
        </main>
    );
}