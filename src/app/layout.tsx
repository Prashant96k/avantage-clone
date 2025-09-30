import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L4RG — We Grow Brands",
  description: "Exact clone build (authorized) in Next.js + Tailwind",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
