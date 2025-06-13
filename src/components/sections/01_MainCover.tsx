import { IMainInfo } from "@/utils/types";
import { formatDate } from "@/utils/utils";
import Image from "next/image";
import React from "react";

export default function MainCover({ info }: IMainInfo) {
  // const match = info.weddingDate.match(/(\d{2})월\s*(\d{2})일/);
  // const month = match ? match[1] : "";
  // const day = match ? match[2] : "";

  return (
    <section
      id="main"
      className="relative w-full max-w-xl mx-auto overflow-hidden"
    >
      <div className="relative">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={info.images.mainImage}
            alt="Wedding Cover"
            fill
            className="object-cover"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[1px] left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
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
            src="/effect/1.jfif"
            alt=""
          />
        </div>

        <div className="absolute top-10 left-0 right-0 px-12 flex justify-between items-center font-medium tracking-wider pointer-events-none">
          <span>{info.groom.nameKo}</span>

          {/* <div className="text-lg select-none cursor-default flex items-center tracking-normal">
            <span className="mt-[-1.5rem]">{month}</span>
            <div className="w-[1px] h-12 bg-foreground mx-0.5 rotate-40 origin-center" />
            <span className="mb-[-1.5rem]">{day}</span>
          </div> */}

          <span>{info.bride.nameKo}</span>
        </div>
      </div>

      <div className="text-center font-normal mx-auto bg-background leading-7 pt-8 pb-12">
        <p>
          {formatDate(info.weddingDate) +
            " " +
            info.weddingDay +
            " " +
            info.weddingTime}
        </p>
        <p>{info.weddingLoc}</p>
      </div>
    </section>
  );
}
