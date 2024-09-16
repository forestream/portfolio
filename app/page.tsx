import Link from "next/link";
import CarouselClient from "./_view/carousel-client";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<nav className="flex justify-start p-6 font-normal text-sm">
				<h1>조한빈 포트폴리오</h1>
			</nav>
			<main className="max-w-[1080px] w-full mx-auto p-4 min-h-screen">
				{/* 시너지 */}
				<div className="flex gap-4 mb-4 justify-between items-center">
					<Link
						href="https://synergy10.vercel.app/"
						target="_blank"
						className="text-2xl inline-block  hover:underline"
					>
						시너지
					</Link>
					<div className="relative h-5 w-5">
						<Link
							href="https://github.com/sprint-part3-team10/tenten"
							target="_blank"
						>
							<Image src="/github-mark.png" alt="깃헙 레포지토리" fill />
						</Link>
					</div>
				</div>
				<CarouselClient className="mb-16">
					<CarouselContent className="-ml-4">
						<CarouselItem className="basis-2/3 pl-4">
							<div className="relative border border-neutral-200 bg-white w-full aspect-video object-contain rounded-lg overflow-hidden">
								<Image
									style={{ objectFit: "contain" }}
									src="https://forestream.github.io/image-bank/synergy-infinite-scroll.gif"
									alt="시너지 무한스크롤 이미지"
									fill
									unoptimized
								/>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-2/3 pl-4">
							<div className="relative border border-neutral-200 bg-white w-full aspect-video object-contain rounded-lg overflow-hidden">
								<Image
									style={{ objectFit: "contain" }}
									src="https://forestream.github.io/image-bank/loading-handling.gif"
									alt="시너지 로딩 처리"
									fill
									unoptimized
								/>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-2/3 pl-4">
							<div className="relative border border-neutral-200 bg-white w-full aspect-video object-contain rounded-lg overflow-hidden">
								<Image
									style={{ objectFit: "contain" }}
									src="https://forestream.github.io/image-bank/recent-recruits.jpg"
									alt="시너지 최근본공고"
									fill
									unoptimized
								/>
							</div>
						</CarouselItem>
					</CarouselContent>
				</CarouselClient>

				{/* 띄워 보낸 편지 */}
				<div className="flex gap-4 mb-4 justify-between items-center">
					<Link
						href="https://letters-set-afloat.vercel.app/"
						target="_blank"
						className="text-2xl inline-block  hover:underline"
					>
						띄워 보낸 편지
					</Link>
					<div className="relative h-5 w-5">
						<Link
							href="https://github.com/forestream/letters-set-afloat"
							target="_blank"
						>
							<Image src="/github-mark.png" alt="깃헙 레포지토리" fill />
						</Link>
					</div>
				</div>
				<CarouselClient>
					<CarouselContent className="-ml-4 mb-4">
						<CarouselItem className="basis-2/3 pl-4 relative right-20">
							<div className="relative border border-neutral-200 bg-white w-full aspect-video object-contain rounded-lg overflow-hidden">
								<Image
									style={{ objectFit: "contain" }}
									src="https://forestream.github.io/image-bank/synergy-infinite-scroll.gif"
									alt="시너지 무한스크롤 이미지"
									fill
									unoptimized
								/>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-2/3 pl-4 relative right-20">
							<div className="relative border border-neutral-200 bg-white w-full aspect-video object-contain rounded-lg overflow-hidden">
								<Image
									style={{ objectFit: "contain" }}
									src="https://forestream.github.io/image-bank/loading-handling.gif"
									alt="시너지 로딩 처리"
									fill
									unoptimized
								/>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-2/3 pl-4 relative right-20">
							<div className="relative border border-neutral-200 bg-white w-full aspect-video object-contain rounded-lg overflow-hidden">
								<Image
									style={{ objectFit: "contain" }}
									src="https://forestream.github.io/image-bank/recent-recruits.jpg"
									alt="시너지 최근본공고"
									fill
									unoptimized
								/>
							</div>
						</CarouselItem>
					</CarouselContent>
				</CarouselClient>
			</main>
		</>
	);
}
