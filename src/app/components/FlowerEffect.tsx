"use client";

import { useEffect, useRef } from "react";

const NUM_FLOWERS = 30;

// fallback용 Unsplash 꽃잎 이미지 URL
const FALLBACK_IMAGE_URL =
  "https://images.unsplash.com/photo-1558089687-94a8e9aa6f1b?auto=format&fit=crop&w=512&q=60";

type Flower = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
};

export default function FlowerEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const flowers = useRef<Flower[]>([]);
  const flowerImage = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // 꽃잎 초기화
    flowers.current = [];
    for (let i = 0; i < NUM_FLOWERS; i++) {
      flowers.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 20 + 10,
        speedX: (Math.random() - 0.5) * 1,
        speedY: Math.random() * 1 + 0.5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
      });
    }

    flowerImage.current = new Image();
    flowerImage.current.src = FALLBACK_IMAGE_URL;

    // 만약 flower.png를 불러오는데 실패하면 fallback 사용
    flowerImage.current.onerror = () => {
      console.warn(
        "flower.png 불러오기 실패. Unsplash fallback 이미지 사용합니다."
      );
      flowerImage.current!.src = FALLBACK_IMAGE_URL;
    };

    flowerImage.current.onload = () => {
      animate();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      flowers.current.forEach((flower) => {
        flower.x += flower.speedX;
        flower.y += flower.speedY;
        flower.rotation += flower.rotationSpeed;

        if (flower.y > window.innerHeight) {
          flower.y = -flower.size;
          flower.x = Math.random() * window.innerWidth;
        }

        if (flowerImage.current) {
          ctx.save();
          ctx.translate(flower.x, flower.y);
          ctx.rotate((flower.rotation * Math.PI) / 180);
          ctx.drawImage(
            flowerImage.current,
            -flower.size / 2,
            -flower.size / 2,
            flower.size,
            flower.size
          );
          ctx.restore();
        }
      });

      requestAnimationFrame(animate);
    };

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
    />
  );
}
