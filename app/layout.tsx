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
				<nav className="flex justify-start p-6 font-normal text-sm"></nav>

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
