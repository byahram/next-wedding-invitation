"use client";

import React from "react";
import SectionTitle from "../common/SectionTitle";
import Script from "next/script";
import { IMainInfo } from "@/utils/types";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Location({ info }: IMainInfo) {
  return (
    <section
      id="location"
      className="relative w-full max-w-xl mx-auto overflow-hidden pt-20 pb-10"
    >
      <Script
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`}
        strategy="afterInteractive"
        onLoad={() => {
          if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(() => {
              const container = document.getElementById("map");
              if (!container) {
                return;
              }

              const lat = 33.2531301;
              const lng = 126.561103;

              const map = new window.kakao.maps.Map(container, {
                center: new window.kakao.maps.LatLng(lat, lng),
                level: 3,
              });

              new window.kakao.maps.Marker({
                position: new window.kakao.maps.LatLng(lat, lng),
                map,
              });
            });
          }
        }}
      />
      <div className="flex flex-col items-center text-center">
        <SectionTitle title="Location" />
        <div className="space-y-2">
          <p className="font-medium">{info.weddingLoc}</p>
          <span className="mb-4">{info.weddingAddress}</span>
        </div>

        <div className="">
          <div
            id="map"
            className="w-full h-[300px] rounded-xl shadow-md px-8"
          ></div>

          <div className="grid grid-cols-3 gap-2 w-full text-sm">
            <a
              href="https://apis.openapi.sk.com/tmap/app/routes?appKey=YOUR_TMAP_APPKEY&name=살롱드레터&lon=126.561103&lat=33.2531301"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border rounded-md py-2 px-1 shadow text-center hover:bg-gray-50"
            >
              <span className="block text-xs text-gray-700">티맵</span>
            </a>
            <a
              href="https://map.kakao.com/link/to/살롱드레터,33.2531301,126.561103"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border rounded-md py-2 px-1 shadow text-center hover:bg-gray-50"
            >
              <span className="block text-xs text-gray-700">카카오내비</span>
            </a>
            <a
              href="https://map.naver.com/p/search/살롱드레터"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border rounded-md py-2 px-1 shadow text-center hover:bg-gray-50"
            >
              <span className="block text-xs text-gray-700">네이버지도</span>
            </a>
          </div>

          <div className="text-left w-full text-sm leading-relaxed space-y-6 mb-8">
            <div>
              <p className="font-bold text-base">🚌 버스</p>
              <p>용산 03, 421, 740, 0017</p>
              <p>‘전쟁기념관’ 또는 ‘용산전자상가’ 정류장 하차 도보 약 5분</p>
            </div>

            <div>
              <p className="font-bold text-base">🚇 지하철</p>
              <p>4호선 삼각지역 1번 출구 → 도보 5분</p>
              <p>6호선 삼각지역 11번 출구 → 도보 5분</p>
              <p>1호선 남영역 1번 출구 → 도보 10분</p>
            </div>

            <div>
              <p className="font-bold text-base">🚗 자차</p>
              <p>‘국방컨벤션’으로 검색</p>
              <p>서울시 용산구 이태원로 22 (용산동3가 1번지)</p>
            </div>

            <div>
              <p className="font-bold text-base">🅿️ 주차</p>
              <p>국방컨벤션 지하주차장 이용 가능</p>
              <p>행사 참석 시 무료주차 제공 (입구 안내데스크 확인)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
