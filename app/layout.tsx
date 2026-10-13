import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "./portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} | Software Engineer`,
  description: "Shine Wai Tun's portfolio: full-stack web development, responsive React and Vue interfaces, backend APIs, and database workflows.",
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | Software Engineer`,
    description: "Explore my work across insurance, real estate, recruitment, and business management systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
