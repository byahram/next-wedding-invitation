"use client";

import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../common/SectionTitle";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Button } from "../common/Buttons";

type GalleryProps = {
  gal: string[];
};

export default function Gallery({ gal }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const [showAll, setShowAll] = useState(false);
  const visibleImages = showAll ? gal : gal.slice(0, 9);

  const closeModal = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  const showNext = () =>
    setSelectedIndex((prev) =>
      prev !== null && prev < gal.length - 1 ? prev + 1 : prev
    );

  useEffect(() => {
    if (selectedIndex !== null && containerRef.current) {
      const updateWidth = () => {
        setContainerWidth(containerRef.current!.offsetWidth);
      };
      updateWidth();
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }
  }, [selectedIndex]);

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

        <AnimatePresence initial={false} mode="sync">
          {selectedIndex !== null && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="relative w-full max-w-md h-full bg-white overflow-hidden"
                ref={containerRef}
              >
                <button
                  className="absolute top-4 right-4 text-black text-3xl z-10"
                  onClick={closeModal}
                >
                  <IoClose />
                </button>

                {selectedIndex > 0 && (
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-black text-3xl z-10"
                    onClick={showPrev}
                  >
                    <IoChevronBack />
                  </button>
                )}

                {selectedIndex < gal.length - 1 && (
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-black text-3xl z-10"
                    onClick={showNext}
                  >
                    <IoChevronForward />
                  </button>
                )}

                {selectedIndex !== null && containerWidth > 0 && (
                  <motion.div
                    className="flex h-full"
                    animate={{ x: -selectedIndex * containerWidth }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, info) => {
                      const threshold = 100;
                      const velocityThreshold = 500;

                      if (
                        info.offset.x < -threshold &&
                        selectedIndex! < gal.length - 1
                      ) {
                        setSelectedIndex((prev) => prev! + 1);
                      } else if (
                        info.offset.x > threshold &&
                        selectedIndex! > 0
                      ) {
                        setSelectedIndex((prev) => prev! - 1);
                      } else {
                        if (
                          info.velocity.x < -velocityThreshold &&
                          selectedIndex! < gal.length - 1
                        ) {
                          setSelectedIndex((prev) => prev! + 1);
                        } else if (
                          info.velocity.x > velocityThreshold &&
                          selectedIndex! > 0
                        ) {
                          setSelectedIndex((prev) => prev! - 1);
                        }
                      }
                    }}
                  >
                    {gal.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        className="w-full flex-shrink-0 h-full object-contain bg-white"
                        alt={`carousel-${i}`}
                        style={{ width: containerWidth }}
                      />
                    ))}
                  </motion.div>
                )}

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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
