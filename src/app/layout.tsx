import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AX Investimentos",
  description: "acredite no seu futuro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#1E1E1E]">{children}</body>
    </html>
  );
}
