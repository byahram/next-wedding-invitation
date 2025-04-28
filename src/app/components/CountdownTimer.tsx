"use client";

import { useEffect, useState } from "react";

type CountdownTimerProps = {
  targetDate: string; // 예: "2025-11-16T13:00:00"
  groomName: string;
  brideName: string;
};

export default function CountdownTimer({
  targetDate,
  groomName,
  brideName,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const target = new Date(targetDate);
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="w-full max-w-md px-4 py-10 text-center">
      <div className="flex justify-center space-x-4 mb-6">
        <TimeBox value={timeLeft.days} label="Days" />
        <span className="flex items-center">:</span>
        <TimeBox value={timeLeft.hours} label="Hour" />
        <span className="flex items-center">:</span>
        <TimeBox value={timeLeft.minutes} label="Min" />
        <span className="flex items-center">:</span>
        <TimeBox value={timeLeft.seconds} label="Sec" />
      </div>
      <p className="text-gray-700">
        <span className="font-semibold">{groomName}</span> ❤️{" "}
        <span className="font-semibold">{brideName}</span>의 결혼식이
        <span className="text-pink-500 font-semibold"> {timeLeft.days}</span>일
        남았습니다.
      </p>
    </section>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-gray-100 rounded-md px-4 py-2 text-center w-16">
      <p className="text-xl font-bold text-pink-500">
        {String(value).padStart(2, "0")}
      </p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}
