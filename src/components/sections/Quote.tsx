import React from "react";
import CurvedBackground from "../layout/CurvedBackground";

type QuoteProps = {
  quote: string;
  image: string;
};

export default function Quote({ quote, image }: QuoteProps) {
  return (
    <section
      id="quote"
      className="relative w-full max-w-xl mx-auto overflow-hidden pt-24 pb-8 bg-[var(--background2)]"
    >
      {/* 중간 커브 배경 */}
      <CurvedBackground color={"var(--background)"} />

      {/* Quote */}
      <div className="relative text-center">
        <div className="flex justify-center w-full">
          <img
            src="/icon/love-arrow.png"
            alt="Wedding Cover"
            className="w-10 object-cover"
          />
        </div>

        <div className="whitespace-pre-line leading-relaxed space-y-3">
          {quote
            .split("\n")
            .map((line, idx) =>
              line.trim() !== "" ? (
                <p key={idx}>{line}</p>
              ) : (
                <br key={`br-${idx}`} />
              )
            )}
        </div>
      </div>

      <img
        src="/image/CSC_7955.jpg"
        alt="Wedding Cover"
        className="w-full h-full object-cover"
      />
    </section>
  );
}
