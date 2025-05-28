import type { Metadata } from "next";
import { Geist, Geist_Mono, Lusitana } from "next/font/google";
import "./globals.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lusitana = Lusitana({
  variable: "--font-lusitana",
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Nicholas Malm",
  description: "Nicholas Malm's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lusitana.variable} antialiased`}
      >
        <ThemeSwitcher />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
