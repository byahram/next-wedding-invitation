import React from "react";

type FooterSectionProps = {
  footer: {
    footerText: string;
  };
};

export default function FooterSection({ footer }: FooterSectionProps) {
  const { footerText } = footer;
  return (
    <footer className="w-full px-4 py-8 text-center text-gray-500 text-sm leading-relaxed whitespace-pre-line">
      {footerText}
    </footer>
  );
}
