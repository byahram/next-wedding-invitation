type SectionTitleProps = {
  subtitle: string;
  title: string;
};

export default function SectionTitle({ subtitle, title }: SectionTitleProps) {
  return (
    <div className="w-full text-center mb-8">
      <p className="text-sm text-purple-400">{subtitle}</p>
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <div className="border-t border-dashed border-purple-200 mt-4 w-1/2 mx-auto"></div>
    </div>
  );
}
