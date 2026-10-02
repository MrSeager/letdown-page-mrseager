import type { Metadata } from "next";
import { Teko, Staatliches } from "next/font/google";
import "./globals.css";

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const staatliches = Staatliches({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"], // Staatliches has only one weight
});

export const metadata: Metadata = {
  title: "LETDOWN.",
  description: "LETDOWN.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${teko.variable} ${staatliches.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
