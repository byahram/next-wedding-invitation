import SectionTitle from "./SectionTitle";

export default function WeddingInfo() {
  return (
    <section className="w-full max-w-md px-4 py-10 text-center">
      <SectionTitle subtitle="Information" title="결혼식 안내" />
      <p className="text-gray-700 mb-2">2025년 11월 16일 (일) 오후 1시</p>
      <p className="text-gray-700 mb-2">
        서울 강남구 어딘가 웨딩홀 3층 그랜드홀
      </p>
      <p className="text-gray-500 text-sm mt-4">
        * 예식장 전화번호 및 안내 문구 추가 가능
      </p>
    </section>
  );
}
