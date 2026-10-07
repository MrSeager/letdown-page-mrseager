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
  description: "Music, Tours, Merch & Social Media. Contains links to music service apps and various social media...",
  icons: { 
    icon: "/images/07_Logo_64px.ico", 
  },
  openGraph: {
    title: "LETDOWN.",
    description: "Music, Tours, Merch & Social Media. Contains links to music service apps and various social media...",
    images: [
      {
        url: "/images/08_Preview.jpg",
        width: 1173,
        height: 1174,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/08_Preview.jpg"],
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
