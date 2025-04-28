"use client";

import { useState } from "react";

export default function GuestbookSection() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <section className="w-full max-w-md px-4 py-10">
      <h2 className="text-xl font-semibold text-center mb-6">방명록</h2>
      <div className="space-y-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="축하메시지를 남겨주세요"
          className="w-full border rounded-md p-2"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white py-2 rounded-md"
        >
          작성하기
        </button>

        <div className="space-y-2 mt-6">
          {messages.map((msg, idx) => (
            <div key={idx} className="bg-gray-100 p-3 rounded-md text-sm">
              {msg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
