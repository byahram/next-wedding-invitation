import React from "react";
import CountdownTimer from "./CountdownTimer";
import { IMainInfo } from "@/utils/types";

const getDaysInMonth = (month: string, year: string): number => {
  return new Date(parseInt(year), parseInt(month), 0).getDate(); // 윤년 반영
};

export default function Calendar({ info }: IMainInfo) {
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const [year, month, day] = info.weddingDate.split("-");
  const daysInMonth = getDaysInMonth(month, year);

  return (
    <section
      id="calendar"
      className="relative w-full max-w-xl mx-auto overflow-hidden pt-20 pb-10 px-10"
    >
      <div className="relative flex-col justify-center items-center text-center">
        <p className="text-xl mt-2 font-light font-parisienne flex text-left ml-4 whitespace-pre-line">
          {info.weddingTxt}
        </p>

        <div className="mt-4">
          {/* 요일 헤더 */}
          <div className="grid grid-cols-7 text-center border-t-2 py-2 font-semibold text-gray-600">
            {weekdays.map((day, index) => (
              <div key={index}>{day}</div>
            ))}
          </div>

          {/* 날짜 */}
          <div className="grid grid-cols-7 text-center border-b-2 text-gray-700 mt-4 gap-y-6 text-sm pb-6">
            {Array.from({ length: parseInt(info.calBlank) }, (_, index) => (
              <div key={index}></div>
            ))}

            {/* 날짜들 */}
            {Array.from({ length: daysInMonth }, (_, i) => {
              const dayNum = i + 1;
              const isSelected = dayNum === parseInt(day);

              return (
                <div
                  key={dayNum}
                  className="relative flex flex-col items-center"
                >
                  {isSelected ? (
                    <>
                      <div className="w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center text-sm font-medium z-10">
                        {dayNum}
                      </div>
                      <span className="absolute -bottom-5 w-20 -left-3 text-[10px] text-gray-500 mt-1">
                        {info.weddingTime}
                      </span>
                    </>
                  ) : (
                    <span className="w-8 h-8 inline-flex items-center justify-center">
                      {dayNum}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <CountdownTimer
          targetDate={info.weddingDate}
          groomName={info.groom.nameKo}
          brideName={info.bride.nameKo}
        />
      </div>
    </section>
  );
}
