/* eslint-disable @next/next/no-img-element */
import React from "react";

type MainCoverProps = {
  info: {
    groomNameKo: string;
    brideNameKo: string;
    weddingDate: string;
    weddingTime: string;
    weddingLoc: string;
    mainImage: string;
  };
};

export default function MainCover01({ info }: MainCoverProps) {
  const {
    groomNameKo,
    brideNameKo,
    weddingDate,
    weddingTime,
    weddingLoc,
    mainImage,
  } = info;

  const match = weddingDate.match(/(\d{2})월\s*(\d{2})일/);
  const month = match ? match[1] : "";
  const day = match ? match[2] : "";

  return (
    <section
      id="main"
      className="relative w-full max-w-xl mx-auto overflow-hidden"
    >
      <div className="relative aspect-[3/4]">
        <img
          src={mainImage}
          alt="Wedding Cover"
          className="w-full h-full object-cover"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
        />

        <div className="absolute top-0 w-full h-full overflow-hidden pointer-events-none">
          <img
            draggable={false}
            className="absolute top-0 left-0 w-full select-none pointer-events-none call-out"
            style={{
              zIndex: 3,
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%, rgba(0,0,0,0))",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%, rgba(0,0,0,0))",
            }}
            src="https://cdn2.makedear.com/homepage/img/effect/new1/1.png"
            alt=""
          />
        </div>

        <div className="absolute top-10 left-0 right-0 px-18 flex justify-between items-center font-medium tracking-wider pointer-events-none">
          <span>{groomNameKo}</span>

          <div className="text-lg select-none cursor-default flex items-center tracking-normal">
            <span className="mt-[-1.5rem]">{month}</span>
            <div className="w-[1px] h-12 bg-foreground mx-0.5 rotate-40 origin-center" />
            <span className="mb-[-1.5rem]">{day}</span>
          </div>

          <span>{brideNameKo}</span>
        </div>
      </div>

      <div className="pb-6 pt-3 text-lg text-center font-normal max-w-xl mx-auto bg-background">
        <h1>{weddingDate + " " + weddingTime}</h1>
        <p>{weddingLoc}</p>
      </div>
    </section>
  );
}
