import Link from "next/link";
import CarouselClient from "./_view/carousel-client";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import ProjectDescription from "./_view/project-description";
import IconNewWindow from "@/components/icon/IconNewWindow";
import IconInfoCircle from "@/components/icon/IconInfoCircle";
import IconGithub from "@/components/icon/IconGithub";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { imageMetadata } from "@/lib/imageMetadata";

export default function Home() {
	return (
		<>
			<main className="max-w-[1080px] w-full mx-auto p-4 min-h-screen">
				{/* 시너지 */}
				<div className="flex gap-2 mb-4 justify-between items-center">
					<Link
						href="https://synergy10.vercel.app/"
						target="_blank"
						className="text-2xl font-semibold hover:underline flex items-center gap-1.5 bg-clip-text bg-gradient-to-br from-yellow-200 to-white text-transparent drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] shadow-yellow-100 transition-[filter] duration-300"
					>
						시너지
						<IconNewWindow className="relative top-1 fill-white" />
					</Link>
					<div className="relative top-1 w-5 h-5">
						<Dialog>
							<DialogTrigger asChild>
								<IconInfoCircle className="fill-white cursor-pointer hover:opacity-70 transition-opacity" />
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>시너지</DialogTitle>
									<DialogDescription>
										기술스택: Next.js App Router / Typescript / SCSS ...
									</DialogDescription>
									<DialogDescription>
										하루 일할 알바를 구하는 플랫폼. 회원가입 유형에 따라 사장과
										알바로 나뉘어서 페이지 UI는 비슷하지만 유저별로 달라지는
										기능 관리에 신경 써야 했던 프로젝트입니다.{" "}
									</DialogDescription>
								</DialogHeader>
							</DialogContent>
						</Dialog>
					</div>
					<div className="grow relative h-5 w-5 flex justify-end">
						<Link
							className="w-5 h-5 hover:opacity-70"
							href="https://github.com/sprint-part3-team10/tenten"
							target="_blank"
						>
							<IconGithub className="w-full h-full fill-white" />
						</Link>
					</div>
				</div>
				<CarouselClient className="mb-16">
					<CarouselContent className="-ml-4">
						{imageMetadata.synergy.map((metadatum) => (
							<CarouselItem
								key={metadatum.src}
								className="group cursor-pointer basis-2/3 pl-4"
							>
								<div className="relative hover:border-neutral-400 hover:shadow-lg transition-colors duration-200 bg-white w-full aspect-video object-contain rounded-lg overflow-hidden">
									<Image
										style={{ objectFit: "contain" }}
										src={metadatum.src}
										alt={metadatum.alt}
										fill
										unoptimized
									/>
									<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity p-4 flex flex-col items-center justify-between"></div>
									<ProjectDescription className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-center p-4 ">
										<p className="font-light text-xl text-white">
											{metadatum.desc}
										</p>
									</ProjectDescription>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</CarouselClient>

				{/* 띄워 보낸 편지 */}
				<div className="flex gap-2 mb-4 justify-between items-center">
					<Link
						href="https://letters-set-afloat.vercel.app/"
						target="_blank"
						className="text-2xl font-semibold hover:underline flex items-center gap-1.5 bg-clip-text bg-gradient-to-br from-yellow-200 to-white text-transparent drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] shadow-yellow-100 transition-[filter] duration-300"
					>
						띄워 보낸 편지
						<IconNewWindow className="relative top-1 fill-white" />
					</Link>
					<div className="relative top-1 w-5 h-5">
						<Dialog>
							<DialogTrigger asChild>
								<IconInfoCircle className="fill-white cursor-pointer hover:opacity-70 transition-opacity" />
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>띄워 보낸 편지</DialogTitle>
									<DialogDescription>
										기술스택: Next.js App Router / Typescript / Tailwind CSS /
										Firebase ...
									</DialogDescription>
									<DialogDescription>
										익명의 편지를 바다로 띄워 보낼 수 있는 프로젝트입니다.{" "}
										<pre className="inline-block">canvas</pre> 태그를 라이브러리
										없이 사용하여 노을이 지는 이미지와 애니메이션을, firebase로
										db와 유저기능을 구현했습니다.{" "}
									</DialogDescription>
								</DialogHeader>
							</DialogContent>
						</Dialog>
					</div>
					<div className="grow relative h-5 w-5 flex justify-end">
						<Link
							className="w-5 h-5 hover:opacity-70"
							href="https://github.com/forestream/letters-set-afloat"
							target="_blank"
						>
							<IconGithub className="w-full h-full fill-white" />
						</Link>
					</div>
				</div>
				<CarouselClient className="mb-16">
					<CarouselContent className="-ml-4 mb-4">
						{imageMetadata.lsa.map((metadatum) => (
							<CarouselItem
								key={metadatum.src}
								className="group cursor-pointer basis-2/3 pl-4"
							>
								<div className="relative hover:border-neutral-400 hover:shadow-lg transition-colors duration-200 bg-white w-full aspect-video object-contain rounded-lg overflow-hidden">
									<Image
										style={{ objectFit: "contain" }}
										src={metadatum.src}
										alt={metadatum.alt}
										fill
										unoptimized
									/>
									<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity p-4 flex flex-col items-center justify-between"></div>
									<ProjectDescription className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-center p-4 ">
										<p className="font-light text-xl text-white">
											{metadatum.desc}
										</p>
									</ProjectDescription>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</CarouselClient>

				{/* 동그리나 */}
				<div className="flex gap-2 mb-4 justify-between items-center">
					<Link
						href="https://donggrina.vercel.app/calendar"
						target="_blank"
						className="text-2xl font-semibold hover:underline flex items-center gap-1.5 bg-clip-text bg-gradient-to-br from-yellow-200 to-white text-transparent drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] shadow-yellow-100 transition-[filter] duration-300"
					>
						동그리나
						<IconNewWindow className="relative top-1 fill-white" />
					</Link>
					<div className="relative top-1 w-5 h-5">
						<Dialog>
							<DialogTrigger asChild>
								<IconInfoCircle className="fill-white cursor-pointer hover:opacity-70 transition-opacity" />
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>동그리나</DialogTitle>
									<DialogDescription>
										기술스택: Next.js Pages Router / Typescript / Zustand /
										React Query / SCSS ...
									</DialogDescription>
									<DialogDescription>
										백엔드 개발자와 디자이너와 협업으로 진행한 프로젝트입니다.
										가족 단위로 반려동물과 관련된 일정을 공유할 수 있는
										서비스입니다.{" "}
									</DialogDescription>
								</DialogHeader>
							</DialogContent>
						</Dialog>
					</div>
					<div className="grow relative h-5 w-5 flex justify-end">
						<Link
							className="w-5 h-5 hover:opacity-70"
							href="https://github.com/forestream/letters-set-afloat"
							target="_blank"
						>
							<IconGithub className="w-full h-full fill-white" />
						</Link>
					</div>
				</div>
				<CarouselClient>
					<CarouselContent className="-ml-4 mb-4">
						{imageMetadata.donggrina.map((metadatum) => (
							<CarouselItem
								key={metadatum.src}
								className="group cursor-pointer basis-3/5 pl-4"
							>
								<div className="relative hover:border-neutral-400 hover:shadow-lg transition-colors duration-200 bg-white w-full aspect-[4/5] object-contain rounded-lg overflow-hidden">
									<Image
										style={{ objectFit: "contain", scale: "126%" }}
										src={metadatum.src}
										alt={metadatum.alt}
										fill
										unoptimized
									/>
									<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity p-4 flex flex-col items-center justify-between"></div>
									<ProjectDescription className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-center p-4 ">
										<p className="font-light text-xl text-white">
											{metadatum.src}
										</p>
									</ProjectDescription>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</CarouselClient>
			</main>
		</>
	);
}
