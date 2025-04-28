type WeddingCoverProps = {
  groomName: string;
  brideName: string;
  weddingDate: string;
  mainMessage: string;
  imageUrl: string;
};

export default function WeddingCover({
  groomName,
  brideName,
  weddingDate,
  mainMessage,
  imageUrl,
}: WeddingCoverProps) {
  return (
    <div className="relative w-full h-screen">
      <img
        src={
          imageUrl &&
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="Wedding Cover"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white p-6">
        <div className="flex justify-between w-full max-w-md text-sm mb-6">
          <span>{groomName}</span>
          <span>{brideName}</span>
        </div>
        <h1 className="text-3xl font-bold text-center">{mainMessage}</h1>
        <p className="text-lg mt-4">{weddingDate}</p>
      </div>
    </div>
  );
}
