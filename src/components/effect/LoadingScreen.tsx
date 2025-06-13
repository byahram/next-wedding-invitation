"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [step, setStep] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setStep(1), 1000), // "아람 ♥ 지훈"
      setTimeout(() => setStep(2), 2000), // "저희 결혼합니다"
      setTimeout(() => {
        setFadeOut(true);
      }, 3500),
      setTimeout(() => {
        onFinish(); // 로딩 종료
      }, 4500),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, [onFinish]);

  return (
    <div
      className={`fixed z-50 inset-0 flex flex-col max-w-md mx-auto w-full items-center justify-center bg-white text-black text-xl font-nanum transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <p className="text-3xl font-semibold mb-2">
        {step >= 1 && "아람 ♥ 지훈"}
      </p>
      <p className="text-xl">{step >= 2 && "저희 결혼합니다"}</p>
    </div>
  );
}
