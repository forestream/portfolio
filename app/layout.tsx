/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import IconVelog from "@/components/icon/IconVelog";
import IconGithub from "@/components/icon/IconGithub";
import { twMerge } from "tailwind-merge";

const nanumSquareNeo = localFont({
  src: [
    { path: "./fonts/NanumSquareNeoOTF-Lt.otf", weight: "300" },
    { path: "./fonts/NanumSquareNeoOTF-Rg.otf", weight: "400" },
    { path: "./fonts/NanumSquareNeoOTF-Bd.otf", weight: "600" },
    { path: "./fonts/NanumSquareNeoOTF-Eb.otf", weight: "700" },
    { path: "./fonts/NanumSquareNeoOTF-Hv.otf", weight: "800" },
  ],
  variable: "--font-nanum",
});

const notoSans = Noto_Sans_KR({
  variable: "--font-noto-sans",
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
    <html
      lang="ko"
      className={twMerge(nanumSquareNeo.variable, notoSans.variable)}
    >
      <body>
        <nav className="w-full justify-start p-6 text-sm font-normal">
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
        <footer className="flex justify-end px-6 py-12 text-sm font-bold text-white lg:px-40">
          <h1 className="grow">조한빈 포트폴리오</h1>
          <div className="flex gap-2">
            <div className="relative h-6 w-6 hover:opacity-70">
              <Link href="https://github.com/forestream" target="_blank">
                <IconGithub className="fill-white" />
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
