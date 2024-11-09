import Link from "next/link";
import CarouselClient from "./_view/carousel-client";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import ProjectDescription from "./_view/project-description";
import IconNewWindow from "@/components/icon/IconNewWindow";
import IconInfoCircle from "@/components/icon/IconInfoCircle";
import IconGithub from "@/components/icon/IconGithub";

export default function Home() {
	return (
		<>
			<main className="max-w-[1080px] w-full mx-auto p-4 min-h-screen">
				{/* 시너지 */}
				<div className="flex gap-2 mb-4 justify-between items-center">
					<Link
						href="https://synergy10.vercel.app/"
						target="_blank"
						className="text-2xl font-semibold hover:underline flex items-center gap-1.5 bg-clip-text bg-gradient-to-br from-yellow-200 to-white text-transparent drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] shadow-yellow-100"
					>
						시너지
						<IconNewWindow className="relative top-1 fill-white" />
					</Link>
					<div className="relative top-1 w-5 h-5">
						<IconInfoCircle className="fill-white" />
					</div>
					<div className="grow relative h-5 w-5 hover:opacity-70 flex justify-end">
						<Link
							className="w-5 h-5"
							href="https://github.com/sprint-part3-team10/tenten"
							target="_blank"
						>
							<IconGithub className="w-full h-full fill-white" />
						</Link>
					</div>
				</div>
				<CarouselClient className="mb-16">
					<CarouselContent className="-ml-4">
						<CarouselItem className="group cursor-pointer basis-2/3 pl-4">
							<div className="relative hover:border-neutral-400 hover:shadow-lg transition-colors duration-200 bg-white w-full aspect-video object-contain rounded-lg overflow-hidden">
								<Image
									style={{ objectFit: "contain" }}
									src="https://forestream.github.io/image-bank/synergy-infinite-scroll.gif"
									alt="시너지 무한스크롤 이미지"
									fill
									unoptimized
								/>
								<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity p-4 flex flex-col items-center justify-between"></div>
								<ProjectDescription className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-center p-4 ">
									<p className="font-light text-xl text-white">
										무한스크롤 - Intersection Observer API
									</p>
								</ProjectDescription>
							</div>
						</CarouselItem>
						<CarouselItem className="group cursor-pointer basis-2/3 pl-4">
							<div className="relative hover:border-neutral-400 hover:shadow-lg transition-colors duration-200 bg-white w-full aspect-video object-contain rounded-lg overflow-hidden">
								<Image
									style={{ objectFit: "contain" }}
									src="https://forestream.github.io/image-bank/synergy-loading.gif"
									alt="시너지 로딩 처리"
									fill
									unoptimized
								/>
								<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity p-4 flex flex-col items-center justify-between"></div>
								<ProjectDescription className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-center p-4 ">
									<p className="font-light text-xl text-white">
										fetch API & 로딩 처리
									</p>
								</ProjectDescription>
							</div>
						</CarouselItem>
						<CarouselItem className="group cursor-pointer basis-2/3 pl-4">
							<div className="relative hover:border-neutral-400 hover:shadow-lg transition-colors duration-200 bg-white w-full aspect-video object-contain rounded-lg overflow-hidden">
								<Image
									style={{ objectFit: "contain" }}
									src="https://forestream.github.io/image-bank/synergy-recent.gif"
									alt="시너지 최근본공고"
									fill
									unoptimized
								/>
								<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity p-4 flex flex-col items-center justify-between"></div>
								<ProjectDescription className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-center p-4 ">
									<p className="font-light text-xl text-white">
										최근본공고(로컬스토리지)
									</p>
								</ProjectDescription>
							</div>
						</CarouselItem>
					</CarouselContent>
				</CarouselClient>

				{/* 띄워 보낸 편지 */}
				<div className="flex gap-2 mb-4 justify-between items-center">
					<Link
						href="https://letters-set-afloat.vercel.app/"
						target="_blank"
						className="text-2xl font-semibold hover:underline flex items-center gap-1.5 bg-clip-text bg-gradient-to-br from-yellow-200 to-white text-transparent drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] shadow-yellow-100"
					>
						띄워 보낸 편지
						<IconNewWindow className="relative top-1 fill-white" />
					</Link>
					<div className="relative top-1 w-5 h-5">
						<IconInfoCircle className="fill-white" />
					</div>
					<div className="grow relative h-5 w-5 hover:opacity-70 flex justify-end">
						<Link
							className="w-5 h-5"
							href="https://github.com/forestream/letters-set-afloat"
							target="_blank"
						>
							<IconGithub className="w-full h-full fill-white" />
						</Link>
					</div>
				</div>
				<CarouselClient className="mb-16">
					<CarouselContent className="-ml-4 mb-4">
						<CarouselItem className="group cursor-pointer basis-2/3 pl-4">
							<div className="relative hover:border-neutral-400 hover:shadow-lg transition-colors duration-200 bg-white w-full aspect-video object-contain rounded-lg overflow-hidden">
								<Image
									style={{ objectFit: "contain" }}
									src="https://forestream.github.io/image-bank/lsa-replying.gif"
									alt="띄워보낸편지 답글 기능"
									fill
									unoptimized
								/>
								<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity p-4 flex flex-col items-center justify-between"></div>
								<ProjectDescription className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-center p-4 ">
									<p className="font-light text-xl text-white">
										편지 답글 기능
									</p>
								</ProjectDescription>
							</div>
						</CarouselItem>
						<CarouselItem className="group cursor-pointer basis-2/3 pl-4">
							<div className="relative hover:border-neutral-400 hover:shadow-lg transition-colors duration-200 bg-white w-full aspect-video object-contain rounded-lg overflow-hidden">
								<Image
									style={{ objectFit: "contain" }}
									src="https://forestream.github.io/image-bank/lsa-sending.gif"
									alt="띄워보낸편지 보내기 기능"
									fill
									unoptimized
								/>
								<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity p-4 flex flex-col items-center justify-between"></div>
								<ProjectDescription className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-center p-4 ">
									<p className="font-light text-xl text-white">편지 띄우기</p>
								</ProjectDescription>
							</div>
						</CarouselItem>
						<CarouselItem className="group cursor-pointer basis-2/3 pl-4">
							<div className="relative hover:border-neutral-400 hover:shadow-lg transition-colors duration-200 bg-white w-full aspect-video object-contain rounded-lg overflow-hidden">
								<Image
									style={{ objectFit: "contain" }}
									src="https://forestream.github.io/image-bank/lsa-login.gif"
									alt="띄워보낸편지 구글로그인"
									fill
									unoptimized
								/>
								<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity p-4 flex flex-col items-center justify-between"></div>
								<ProjectDescription className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-center p-4 ">
									<p className="font-light text-xl text-white">구글 로그인</p>
								</ProjectDescription>
							</div>
						</CarouselItem>
					</CarouselContent>
				</CarouselClient>

				{/* 동그리나 */}
				<div className="flex gap-2 mb-4 justify-between items-center">
					<Link
						href="https://donggrina.vercel.app/calendar"
						target="_blank"
						className="text-2xl font-semibold hover:underline flex items-center gap-1.5 bg-clip-text bg-gradient-to-br from-yellow-200 to-white text-transparent drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] shadow-yellow-100"
					>
						동그리나
						<IconNewWindow className="relative top-1 fill-white" />
					</Link>
					<div className="relative top-1 w-5 h-5">
						<IconInfoCircle className="fill-white" />
					</div>
					<div className="grow relative h-5 w-5 hover:opacity-70 flex justify-end">
						<Link
							className="w-5 h-5"
							href="https://github.com/forestream/letters-set-afloat"
							target="_blank"
						>
							<IconGithub className="w-full h-full fill-white" />
						</Link>
					</div>
				</div>
				<CarouselClient>
					<CarouselContent className="-ml-4 mb-4">
						<CarouselItem className="group cursor-pointer basis-3/5 pl-4">
							<div className="relative hover:border-neutral-400 hover:shadow-lg transition-colors duration-200 bg-white w-full aspect-[4/5] object-contain rounded-lg overflow-hidden">
								<Image
									style={{ objectFit: "contain", scale: "126%" }}
									src="https://forestream.github.io/image-bank/donggrina-calendar.gif"
									alt="동그리나 달력 컴포넌트"
									fill
									unoptimized
								/>
								<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity p-4 flex flex-col items-center justify-between"></div>
								<ProjectDescription className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-center p-4 ">
									<p className="font-light text-xl text-white">
										달력 일자별 일정 표시
									</p>
								</ProjectDescription>
							</div>
						</CarouselItem>
						<CarouselItem className="group cursor-pointer basis-3/5 pl-4">
							<div className="relative hover:border-neutral-400 hover:shadow-lg transition-colors duration-200 bg-white w-full aspect-[4/5] object-contain rounded-lg overflow-hidden">
								<Image
									style={{ objectFit: "contain", scale: "126%" }}
									src="https://forestream.github.io/image-bank/donggrina-calendar-add.gif"
									alt="동그리나 일정 생성, 삭제"
									fill
									unoptimized
								/>
								<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity p-4 flex flex-col items-center justify-between"></div>
								<ProjectDescription className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-center p-4 ">
									<p className="font-light text-xl text-white">
										일정 생성, 삭제
									</p>
								</ProjectDescription>
							</div>
						</CarouselItem>
						<CarouselItem className="group cursor-pointer basis-3/5 pl-4">
							<div className="relative hover:border-neutral-400 hover:shadow-lg transition-colors duration-200 bg-white w-full aspect-[4/5] object-contain rounded-lg overflow-hidden">
								<Image
									style={{ objectFit: "contain", scale: "126%" }}
									src="https://forestream.github.io/image-bank/donggrina-todo-edit.gif"
									alt="동그리나 일정 수정"
									fill
									unoptimized
								/>
								<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity p-4 flex flex-col items-center justify-between"></div>
								<ProjectDescription className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-center p-4 ">
									<p className="font-light text-xl text-white">일정 수정</p>
								</ProjectDescription>
							</div>
						</CarouselItem>
					</CarouselContent>
				</CarouselClient>
			</main>
		</>
	);
}
