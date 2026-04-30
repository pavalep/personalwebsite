import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paval EP | React Native, AI & Backend Developer",
  description:
    "Portfolio of Paval EP, a React Native developer expanding into AI-backed products, Dockerized Next.js apps, backend APIs, and local model workflows.",
  openGraph: {
    title: "Paval EP | React Native, AI & Backend Developer",
    description:
      "Mobile product developer focused on React Native, integrations, AI tooling, Dockerized Next.js apps, and backend systems.",
    url: "https://pavalep.com",
    siteName: "Paval EP",
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
