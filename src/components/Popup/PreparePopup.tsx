"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/Buttons";

export default function PreparePopup() {
  const [showPreparePopup, SetShowPreparingPopup] = useState(true);

  // 팝업 열릴 때 body 스크롤 막기
  useEffect(() => {
    if (showPreparePopup) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    // 컴포넌트 언마운트 시 원래 상태 복구용 클린업
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [showPreparePopup]);

  if (!showPreparePopup) return null;

  return (
    <div className="fixed inset-0 bg-black/35 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-background px-10 py-6 rounded-lg shadow-lg text-center w-2xs">
        <p className="text-lg font-semibold">준비 중입니다</p>
        <p className="mt-2 text-sm text-gray-600">조금만 기다려주세요!</p>
        <Button
          className="mt-4"
          variant="solid"
          size="default"
          onClick={() => SetShowPreparingPopup(false)}
        >
          닫기
        </Button>
      </div>
    </div>
  );
}
