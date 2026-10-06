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
  metadataBase: new URL("https://letdown-page-mrseager.vercel.app"),
  title: "LETDOWN.",
  description: "LETDOWN. advertising page. Contains links to music services apps and various social media.",
  icons: { 
    icon: "/images/07_Logo_64px.ico", 
  },
  openGraph: {
    title: "LETDOWN.",
    description: "LETDOWN. advertising page. Contains links to music services apps and various social media.",
    images: [
      {
        url: "/images/03_background-photo.jpg",
        width: 1600,
        height: 1086,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/03_background-photo.jpg"],
  },
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
