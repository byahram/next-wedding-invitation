"use client";

import React, { useRef, useState } from "react";
import SectionTitle from "../common/SectionTitle";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Button } from "../common/Buttons";

type GalleryProps = {
  gal: string[];
};

export default function Gallery({ gal }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [showAll, setShowAll] = useState(false);
  const visibleImages = showAll ? gal : gal.slice(0, 12);

  const closeModal = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  const showNext = () =>
    setSelectedIndex((prev) =>
      prev !== null && prev < gal.length - 1 ? prev + 1 : prev
    );

  return (
    <section
      id="gallery"
      className="relative w-full max-w-xl mx-auto overflow-hidden pt-20 pb-10"
    >
      <div className="relative flex-col justify-center items-center text-center">
        <SectionTitle title="Gallery" />

        <div className="relative w-full">
          <div className="grid grid-cols-3 gap-2">
            {visibleImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`gallery-${index}`}
                className="w-full aspect-square object-cover cursor-pointer"
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>

          {!showAll && (
            <div className="absolute -bottom-1 left-0 w-full h-[140px] bg-gradient-to-t from-white via-white/80 to-transparent flex justify-center items-end pb-4">
              <Button
                className="mt-10"
                variant="more"
                size="default"
                onClick={() => setShowAll(true)}
              >
                더 보기
              </Button>
            </div>
          )}
        </div>

        {selectedIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
            <div
              className="relative w-full max-w-md h-full bg-background overflow-hidden"
              ref={containerRef}
            >
              <Button
                className="top-4 right-4 z-10"
                variant="slider_icon"
                size="slider_icon"
                onClick={closeModal}
              >
                <IoClose />
              </Button>

              {selectedIndex > 0 && (
                <Button
                  className="left-4 top-1/2 -translate-y-1/2"
                  variant="slider_icon"
                  size="slider_icon"
                  onClick={showPrev}
                >
                  <IoChevronBack />
                </Button>
              )}

              {selectedIndex < gal.length - 1 && (
                <Button
                  className="right-4 top-1/2 -translate-y-1/2"
                  variant="slider_icon"
                  size="slider_icon"
                  onClick={showNext}
                >
                  <IoChevronForward />
                </Button>
              )}

              <div className="w-full h-full flex items-center justify-center transition-all duration-500 ease-in-out">
                <img
                  src={gal[selectedIndex]}
                  alt={`carousel-${selectedIndex}`}
                  className="max-h-full max-w-full object-contain transition-all duration-500 ease-in-out"
                />
              </div>

              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                {gal.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i === selectedIndex ? "bg-black" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
