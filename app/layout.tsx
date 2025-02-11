import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";


const NotoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${NotoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
