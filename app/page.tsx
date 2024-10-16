import Link from "next/link";
import CarouselClient from "./_view/carousel-client";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import ProjectDescription from "./_view/project-description";

export default function Home() {
  return (
    <>
      <main className="max-w-[1080px] w-full mx-auto p-4 min-h-screen">
        {/* 시너지 */}
        <div className="flex gap-4 mb-4 justify-between items-center">
          <Link
            href="https://synergy10.vercel.app/"
            target="_blank"
            className="text-2xl font-semibold inline-block  hover:underline"
          >
            시너지
          </Link>
          <div className="relative h-5 w-5 hover:opacity-70">
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
            <CarouselItem className="group cursor-pointer basis-2/3 pl-4">
              <div className="relative border border-neutral-200 hover:border-neutral-400 hover:shadow-lg transition-colors duration-200 bg-white w-full aspect-video object-contain rounded-lg overflow-hidden">
                <Image
                  style={{ objectFit: "contain" }}
                  src="https://forestream.github.io/image-bank/synergy-infinite-scroll.gif"
                  alt="시너지 무한스크롤 이미지"
                  fill
                  unoptimized
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity p-4 flex flex-col items-center justify-between"></div>
                <ProjectDescription className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-between p-4 ">
                  <p className="font-bold text-xl text-white">프로젝트 설명</p>
                </ProjectDescription>
              </div>
            </CarouselItem>
            <CarouselItem className="group cursor-pointer basis-2/3 pl-4">
              <div className="relative border border-neutral-200 hover:border-neutral-400 hover:shadow-lg transition-colors duration-200 bg-white w-full aspect-video object-contain rounded-lg overflow-hidden">
                <Image
                  style={{ objectFit: "contain" }}
                  src="https://forestream.github.io/image-bank/synergy-loading.gif"
                  alt="시너지 로딩 처리"
                  fill
                  unoptimized
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity p-4 flex flex-col items-center justify-between"></div>
                <ProjectDescription className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-between p-4 ">
                  <p className="font-bold text-xl text-white">프로젝트 설명</p>
                </ProjectDescription>
              </div>
            </CarouselItem>
            <CarouselItem className="group cursor-pointer basis-2/3 pl-4">
              <div className="relative border border-neutral-200 hover:border-neutral-400 hover:shadow-lg transition-colors duration-200 bg-white w-full aspect-video object-contain rounded-lg overflow-hidden">
                <Image
                  style={{ objectFit: "contain" }}
                  src="https://forestream.github.io/image-bank/synergy-recent.gif"
                  alt="시너지 최근본공고"
                  fill
                  unoptimized
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity p-4 flex flex-col items-center justify-between"></div>
                <ProjectDescription className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-between p-4 ">
                  <p className="font-bold text-xl text-white">프로젝트 설명</p>
                </ProjectDescription>
              </div>
            </CarouselItem>
          </CarouselContent>
        </CarouselClient>

        {/* 띄워 보낸 편지 */}
        <div className="flex gap-4 mb-4 justify-between items-center">
          <Link
            href="https://letters-set-afloat.vercel.app/"
            target="_blank"
            className="text-2xl font-semibold inline-block  hover:underline"
          >
            띄워 보낸 편지
          </Link>
          <div className="relative h-5 w-5 hover:opacity-70">
            <Link
              href="https://github.com/forestream/letters-set-afloat"
              target="_blank"
            >
              <Image src="/github-mark.png" alt="깃헙 레포지토리" fill />
            </Link>
          </div>
        </div>
        <CarouselClient className="mb-16">
          <CarouselContent className="-ml-4 mb-4">
            <CarouselItem className="group cursor-pointer basis-2/3 pl-4">
              <div className="relative border border-neutral-200 hover:border-neutral-400 hover:shadow-lg transition-colors duration-200 bg-white w-full aspect-video object-contain rounded-lg overflow-hidden">
                <Image
                  style={{ objectFit: "contain" }}
                  src="https://forestream.github.io/image-bank/lsa-replying.gif"
                  alt="띄워보낸편지 답글 기능"
                  fill
                  unoptimized
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity p-4 flex flex-col items-center justify-between"></div>
                <ProjectDescription className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-between p-4 ">
                  <p className="font-bold text-xl text-white">프로젝트 설명</p>
                </ProjectDescription>
              </div>
            </CarouselItem>
            <CarouselItem className="group cursor-pointer basis-2/3 pl-4">
              <div className="relative border border-neutral-200 hover:border-neutral-400 hover:shadow-lg transition-colors duration-200 bg-white w-full aspect-video object-contain rounded-lg overflow-hidden">
                <Image
                  style={{ objectFit: "contain" }}
                  src="https://forestream.github.io/image-bank/lsa-sending.gif"
                  alt="띄워보낸편지 보내기 기능"
                  fill
                  unoptimized
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity p-4 flex flex-col items-center justify-between"></div>
                <ProjectDescription className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-between p-4 ">
                  <p className="font-bold text-xl text-white">프로젝트 설명</p>
                </ProjectDescription>
              </div>
            </CarouselItem>
            <CarouselItem className="group cursor-pointer basis-2/3 pl-4">
              <div className="relative border border-neutral-200 hover:border-neutral-400 hover:shadow-lg transition-colors duration-200 bg-white w-full aspect-video object-contain rounded-lg overflow-hidden">
                <Image
                  style={{ objectFit: "contain" }}
                  src="https://forestream.github.io/image-bank/lsa-login.gif"
                  alt="띄워보낸편지 구글로그인"
                  fill
                  unoptimized
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity p-4 flex flex-col items-center justify-between"></div>
                <ProjectDescription className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-between p-4 ">
                  <p className="font-bold text-xl text-white">프로젝트 설명</p>
                </ProjectDescription>
              </div>
            </CarouselItem>
          </CarouselContent>
        </CarouselClient>

        {/* 동그리나 */}
        <div className="flex gap-4 mb-4 justify-between items-center">
          <Link
            href="https://donggrina.vercel.app/calendar"
            target="_blank"
            className="text-2xl font-semibold inline-block  hover:underline"
          >
            동그리나
          </Link>
          <div className="relative h-5 w-5 hover:opacity-70">
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
            <CarouselItem className="group cursor-pointer basis-3/5 pl-4">
              <div className="relative border border-neutral-200 hover:border-neutral-400 hover:shadow-lg transition-colors duration-200 bg-white w-full aspect-[4/5] object-contain rounded-lg overflow-hidden">
                <Image
                  style={{ objectFit: "contain", scale: "126%" }}
                  src="https://forestream.github.io/image-bank/donggrina-calendar.gif"
                  alt="동그리나 달력 컴포넌트"
                  fill
                  unoptimized
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity p-4 flex flex-col items-center justify-between"></div>
                <ProjectDescription className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-between p-4 ">
                  <p className="font-bold text-xl text-white">프로젝트 설명</p>
                </ProjectDescription>
              </div>
            </CarouselItem>
            <CarouselItem className="group cursor-pointer basis-3/5 pl-4">
              <div className="relative border border-neutral-200 hover:border-neutral-400 hover:shadow-lg transition-colors duration-200 bg-white w-full aspect-[4/5] object-contain rounded-lg overflow-hidden">
                <Image
                  style={{ objectFit: "contain", scale: "126%" }}
                  src="https://forestream.github.io/image-bank/donggrina-calendar-add.gif"
                  alt="동그리나 일정 생성, 삭제"
                  fill
                  unoptimized
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity p-4 flex flex-col items-center justify-between"></div>
                <ProjectDescription className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-between p-4 ">
                  <p className="font-bold text-xl text-white">프로젝트 설명</p>
                </ProjectDescription>
              </div>
            </CarouselItem>
            <CarouselItem className="group cursor-pointer basis-3/5 pl-4">
              <div className="relative border border-neutral-200 hover:border-neutral-400 hover:shadow-lg transition-colors duration-200 bg-white w-full aspect-[4/5] object-contain rounded-lg overflow-hidden">
                <Image
                  style={{ objectFit: "contain", scale: "126%" }}
                  src="https://forestream.github.io/image-bank/donggrina-todo-edit.gif"
                  alt="동그리나 일정 수정"
                  fill
                  unoptimized
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity p-4 flex flex-col items-center justify-between"></div>
                <ProjectDescription className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-between p-4 ">
                  <p className="font-bold text-xl text-white">프로젝트 설명</p>
                </ProjectDescription>
              </div>
            </CarouselItem>
          </CarouselContent>
        </CarouselClient>
      </main>
    </>
  );
}
