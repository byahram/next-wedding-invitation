import { IMainInfo } from "@/utils/types";
import React from "react";

export default function Ending({ info }: IMainInfo) {
  return (
    <section
      id="ending"
      className="relative w-full max-w-xl mx-auto overflow-hidden"
    >
      <div className="flex flex-col items-center text-center">
        <img
          src={info.images.subImage_2}
          alt=""
          className="w-full object-cover"
        />
        <div className="absolute bottom-10 text-background"></div>
      </div>
    </section>
  );
}
