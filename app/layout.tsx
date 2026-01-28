import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigations from "@/components/navigations";
import Footer from "@/components/footer";
import Background from "@/components/bg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Jeric Polison - Portfolio",
  description:
    "Portfolio website of John Jeric Polison, a skilled web developer specializing in modern web technologies and AI-driven solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <Background>
          <div className="relative pb-5">
            <aside className="fixed left-4 min-h-full">
              <Navigations />
            </aside>

            <main>{children}</main>

            <Footer />
          </div>
        </Background>
      </body>
    </html>
  );
}
