export default function MapSection() {
  return (
    <section className="w-full max-w-md px-4 py-10">
      <h2 className="text-xl font-semibold text-center mb-4">오시는 길</h2>
      <div className="w-full h-60 bg-gray-300 rounded-md mb-4">
        {/* 지도 embed iframe 자리 */}
      </div>
      <div className="text-center text-gray-600 text-sm">
        지하철 2호선 강남역 5번 출구에서 도보 5분 거리
        <br />
        주차 가능 (무료 2시간)
      </div>
    </section>
  );
}
