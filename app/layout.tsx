import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import IconVelog from "@/components/icon/IconVelog";
import IconGithub from "@/components/icon/IconGithub";
import { twMerge } from "tailwind-merge";
import GoToTop from "./_view/GoToTop";
import Header from "./_view/Header";
import SplitFlapProvider from "@/components/SplitFlapProvider";
import Background from "./_view/Background";
import IconNotion from "@/components/icon/IconNotion";

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
  description: "프론트엔드 개발하는 조한빈의 포트폴리오입니다.",
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
      <body className="font-nanum">
        <Background />
        <SplitFlapProvider>
          <Header />
          {children}
        </SplitFlapProvider>
        <GoToTop />
        <footer className="flex justify-end px-6 py-12 text-sm font-bold lg:px-[300px]">
          <p className="grow">
            <span className="block">조한빈 포트폴리오</span>
            <span className="text-xs font-normal">업데이트: 2025.03.21</span>
          </p>
          <div className="flex items-center gap-2">
            <p className="font-normal">
              프로젝트별 자세한 설명은 노션에서 확인하실 수 있습니다.
            </p>
            <div className="relative h-6 w-6 transition-opacity hover:opacity-70">
              <Link
                href="https://just-perigee-eb1.notion.site/Portfolio-16e1388876c380c8b453eaf46b0b47f8"
                target="_blank"
              >
                <IconNotion />
              </Link>
            </div>
            <div className="relative h-6 w-6 transition-opacity hover:opacity-70">
              <Link href="https://github.com/forestream" target="_blank">
                <IconGithub />
              </Link>
            </div>
            <div className="relative h-6 w-6 transition-opacity hover:opacity-70">
              <Link href="https://velog.io/@forestream" target="_blank">
                <IconVelog />
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
