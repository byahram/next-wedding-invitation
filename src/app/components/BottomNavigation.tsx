"use client";

import { useState } from "react";

export default function BottomNavigation() {
  const [isMuted, setIsMuted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // 실제로 배경음악 켜고 끄는 로직은 여기에 연결하면 돼
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "우리 결혼합니다 💍",
          url: window.location.href,
        })
        .catch((err) => console.error(err));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("링크가 복사되었습니다!");
    }
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setShowMenu(false); // 메뉴 닫기
    }
  };

  return (
    <>
      {/* Bottom Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-3 z-40">
        {/* 음소거 버튼 */}
        <button
          onClick={toggleMute}
          className="flex flex-col items-center text-gray-600 text-xs"
        >
          {isMuted ? "🔇" : "🎵"}
          <span className="mt-1">음소거</span>
        </button>

        {/* 메뉴 버튼 */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="flex flex-col items-center text-gray-600 text-xs"
        >
          📋
          <span className="mt-1">메뉴</span>
        </button>

        {/* 공유 버튼 */}
        <button
          onClick={handleShare}
          className="flex flex-col items-center text-gray-600 text-xs"
        >
          📤
          <span className="mt-1">공유</span>
        </button>
      </nav>

      {/* 메뉴 펼쳐졌을 때 */}
      {showMenu && (
        <div className="fixed bottom-16 left-0 right-0 bg-white shadow-lg rounded-t-xl p-4 space-y-4 z-50">
          <button
            onClick={() => handleScrollTo("home")}
            className="w-full text-center text-gray-700 py-2 border-b"
          >
            홈
          </button>
          <button
            onClick={() => handleScrollTo("location")}
            className="w-full text-center text-gray-700 py-2 border-b"
          >
            장소
          </button>
          <button
            onClick={() => handleScrollTo("guestbook")}
            className="w-full text-center text-gray-700 py-2"
          >
            방명록
          </button>
        </div>
      )}
    </>
  );
}
