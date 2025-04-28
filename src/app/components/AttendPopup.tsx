"use client";

import { useState, useEffect } from "react";

export default function AttendPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500); // 페이지 들어온 후 0.5초 뒤에 팝업 띄우기

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-80 text-center shadow-xl">
        <h2 className="text-xl font-semibold mb-4">참석 여부를 알려주세요</h2>
        <div className="flex space-x-4 justify-center">
          <button
            onClick={() => setShowPopup(false)}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            참석
          </button>
          <button
            onClick={() => setShowPopup(false)}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            불참
          </button>
        </div>
        <button
          onClick={() => setShowPopup(false)}
          className="text-gray-400 text-sm mt-6 underline"
        >
          나중에 답할게요
        </button>
      </div>
    </div>
  );
}
