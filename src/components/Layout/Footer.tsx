import React from "react";

type FooterSectionProps = {
  footer: {
    copyright: string;
    footerText: string;
  };
};

export default function FooterSection({ footer }: FooterSectionProps) {
  const { copyright, footerText } = footer;
  return (
    <footer className="w-full px-4 py-8 text-center text-gray-500 text-sm">
      {copyright}
      <br />
      {footerText}
    </footer>
  );
}
