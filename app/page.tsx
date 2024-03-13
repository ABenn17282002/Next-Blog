"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useChat } from "ai/react";

export default function Page() {
  const router = useRouter();
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <button
      className="bg-gradient-to-br from-blue-300 to-blue-800 hover:bg-gradient-to-tl text-white rounded px-4 py-2"
      type="button"
      onClick={() => router.push("/dashboard")}
    >
      Dashboard
    </button>
  );
}
