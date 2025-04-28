export default function AccountSection() {
  return (
    <section className="w-full max-w-md px-4 py-10">
      <h2 className="text-xl font-semibold text-center mb-6">마음 전하실 곳</h2>
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="font-bold mb-2">신랑측</p>
          <p className="text-gray-700 text-sm">
            이성훈 | 국민은행 123456-78-901234
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="font-bold mb-2">신부측</p>
          <p className="text-gray-700 text-sm">
            김채연 | 신한은행 234567-89-012345
          </p>
        </div>
      </div>
    </section>
  );
}
