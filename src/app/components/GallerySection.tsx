export default function GallerySection() {
  return (
    <section className="w-full max-w-md px-4 py-10">
      <h2 className="text-xl font-semibold text-center mb-6">갤러리</h2>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-gray-300 aspect-square rounded-md" />
        <div className="bg-gray-300 aspect-square rounded-md" />
        <div className="bg-gray-300 aspect-square rounded-md" />
        <div className="bg-gray-300 aspect-square rounded-md" />
      </div>
    </section>
  );
}
