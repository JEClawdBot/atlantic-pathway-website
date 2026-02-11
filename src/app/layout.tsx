import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "Atlantic Pathway | Football Scholarships to U.S. Colleges";
const description =
  "Atlantic Pathway in Glasgow, Scotland helps footballers secure athletic scholarships at U.S. colleges through elite coaching, academic guidance, and recruiting strategy.";

export const metadata: Metadata = {
  metadataBase: new URL("https://atlanticpathway.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: [
      {
        url: "/images/players/full-squad-official.jpg",
        width: 1200,
        height: 630,
        alt: "Atlantic Pathway squad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/players/full-squad-official.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-[#0A0A0F] text-[#F8FAFC] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
