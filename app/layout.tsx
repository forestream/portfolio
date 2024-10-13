/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import IconVelog from "@/components/icon/IconVelog";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "조한빈 포트폴리오",
  description: "조한빈의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSans.className} ${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <nav className="w-full overflow-scroll scroll-width-none justify-start p-6 font-normal text-sm">
          <div className="flex">
            <img
              alt="React"
              className="pr-6"
              src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"
            />
            <img
              alt="Next.js"
              className="pr-6"
              src="https://img.shields.io/badge/next.js-black?style=for-the-badge&logo=nextdotjs&logoColor=white"
            />
            <img
              alt="Typescript"
              className="pr-6"
              src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
            />
            <img
              alt="Tailwind CSS"
              className="pr-6"
              src="https://img.shields.io/badge/tailwind%20css-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"
            />
            <img
              alt="React Query"
              className="pr-6"
              src="https://img.shields.io/badge/react%20query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"
            />
            <img
              alt="Jest"
              className="pr-6"
              src="https://img.shields.io/badge/jest-C21325?style=for-the-badge&logo=jest&logoColor=white"
            />
          </div>
        </nav>

        {children}
        <footer className="flex justify-end px-6 lg:px-40 py-12 font-bold text-sm">
          <h1 className="grow">조한빈 포트폴리오</h1>
          <div className="flex gap-2">
            <div className="relative h-6 w-6 hover:opacity-70">
              <Link href="https://github.com/forestream" target="_blank">
                <Image src="/github-mark.png" alt="깃헙 레포지토리" fill />
              </Link>
            </div>
            <div className="relative h-6 w-6 hover:opacity-70">
              <Link href="https://github.com/forestream" target="_blank">
                <IconVelog />
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
