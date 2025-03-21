import * as images from "../images/index";
import Image from "next/image";
import { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import IconNewWindow from "@/components/icon/IconNewWindow";
import {
  ProjectArticleContent,
  ProjectArticleDescription,
  ProjectArticleProvider,
} from "@/components/ProjectArticleProvider";
import CarouselClient from "./CarouselClient";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function ProjectsSection({
  ref,
  className,
  ...props
}: ComponentPropsWithRef<"section">) {
  return (
    <section
      ref={ref}
      className={twMerge("min-h-[100vh]", className)}
      id="projects"
      {...props}
    >
      <ProjectArticleProvider>
        <Link
          href="https://slid-todo-xi.vercel.app/"
          className="inline-block"
          target="_blank"
        >
          <h1 className="font-noto-sans mb-8 flex items-end gap-2 text-4xl font-bold text-orange-950 transition-colors hover:text-orange-900">
            Slid To-do
            <IconNewWindow className="fill-orange-950" />
          </h1>
        </Link>
        <ProjectArticleContent>
          <Link href="https://slid-todo-xi.vercel.app/" target="_blank">
            <div className="relative h-[350px] w-[600px] rounded bg-white shadow-lg">
              <Image
                className="shadow-lg transition-transform hover:-translate-y-1"
                src={images.slidTodo}
                alt="Slid To-do 메인"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>
          <ProjectArticleDescription>
            <p>
              라이브러리: React, Typescript, Tiptap Editor, Tailwind CSS,
              Zustand, Cypress
            </p>
            <p>프레임워크: Next.js</p>
            <p>주작업 페이지: 노트 생성/수정 페이지</p>
            <p className="text-base font-normal">2024.10 - 2024.11</p>
            <p className="mt-6">
              목표별 할 일, 할 일별 노트, 파일, 링크를 관리할 수 있는
              서비스입니다.
            </p>
            <p>- Tiptap Editor를 활용한 WYSIWYG 텍스트 에디터 구현</p>
            <p>- 애니메이션이 적용된 도넛 차트와 프로그레스 바</p>
            <p>
              - Next.js 서버와 미들웨어를 사용해서 도메인이 다른 서버 간의 쿠키
              전송으로 유저 기능 구현
            </p>
            <p className="mt-6 text-base font-normal">
              <Link
                href="https://github.com/FESI-4-4/slid-todo"
                target="_blank"
                className="hover:underline"
              >
                Github 레포지토리
              </Link>
            </p>
          </ProjectArticleDescription>
        </ProjectArticleContent>
      </ProjectArticleProvider>
      <ProjectArticleProvider>
        <h1 className="font-noto-sans mb-8 flex cursor-default items-end gap-2 text-4xl font-bold text-orange-950 transition-colors">
          동그리나
        </h1>
        <ProjectArticleContent>
          <CarouselClient
            speed={1}
            className="h-[350px] w-[600px] rounded bg-white shadow-lg"
          >
            <CarouselContent>
              <CarouselItem>
                <div className="relative h-[350px] w-[600px]">
                  <Image
                    src={images.donggrinaMain}
                    alt="동그리나 메인 이미지"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative h-[350px] w-[600px]">
                  <Image
                    src={images.donggrinaCalendar}
                    alt="동그리나 일정 이미지"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
          </CarouselClient>
          <ProjectArticleDescription>
            <p>
              라이브러리: React, Typescript, SCSS, Tanstack Query, Axios,
              Zustand
            </p>
            <p>프레임워크: Next.js</p>
            <p>주작업 페이지: 일정 생성/수정 페이지</p>
            <p className="text-base font-normal">2024.05 - 2024.06</p>
            <p className="mt-6">
              가족의 반려동물을 등록하고 관련 일정, 성장 기록 등을 공유할 수
              있는 서비스입니다.
            </p>
            <p>- 별도 라이브러리 없이 달력과 시간 입력 UI를 개발했습니다</p>
            <p className="mt-6 text-base font-normal">
              <Link
                href="https://timepicker-snowy.vercel.app/"
                target="_blank"
                className="block hover:underline"
              >
                시간 입력 UI
              </Link>
              <Link
                href="https://github.com/FESI-4-4/slid-todo"
                target="_blank"
                className="hover:underline"
              >
                Github 레포지토리
              </Link>
            </p>
          </ProjectArticleDescription>
        </ProjectArticleContent>
      </ProjectArticleProvider>
      <ProjectArticleProvider>
        <Link
          href="https://slid-todo-xi.vercel.app/"
          className="inline-block"
          target="_blank"
        >
          <h1 className="font-noto-sans mb-8 flex items-end gap-2 text-4xl font-bold text-orange-950 transition-colors hover:text-orange-900">
            시너지
            <IconNewWindow className="fill-orange-950" />
          </h1>
        </Link>
        <ProjectArticleContent>
          <Link href="https://synergy10.vercel.app/" target="_blank">
            <div className="relative h-[350px] w-[600px] rounded bg-white shadow-lg">
              <Image
                src={images.synergy}
                alt="시너지 메인 이미지"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>
          <ProjectArticleDescription>
            <p>라이브러리: React, Typescript, SCSS, React Hook Form</p>
            <p>프레임워크: Next.js</p>
            <p className="text-base font-normal">2024.04 - 2024.05</p>
            <p className="mt-6">하루 알바를 위한 구인/구직 플랫폼입니다.</p>
            <p className="mt-6 text-base font-normal">
              <Link
                href="https://github.com/sprint-part3-team10/tenten"
                target="_blank"
                className="hover:underline"
              >
                Github 레포지토리
              </Link>
            </p>
          </ProjectArticleDescription>
        </ProjectArticleContent>
      </ProjectArticleProvider>
      <ProjectArticleProvider>
        <h1 className="font-noto-sans mb-8 flex items-end gap-2 text-4xl font-bold text-orange-950">
          리액트 구현
        </h1>
        <ProjectArticleContent>
          <div className="relative h-[350px] w-[600px] rounded bg-white shadow-lg">
            <Image
              src={images.jsReact}
              alt="시너지 메인 이미지"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <ProjectArticleDescription>
            <p>라이브러리: Typescript</p>
            <p>프레임워크: Vite</p>
            <p className="text-base font-normal">2025.01 - 2025.02</p>
            <p className="mt-6">바닐라 자바스크립트로 리액트를 구현했습니다.</p>
            <p className="mt-6 text-base font-normal">
              <Link
                href="https://velog.io/@forestream/React-%EA%B5%AC%ED%98%84-%EA%B8%B0%EB%A1%9D"
                target="_blank"
                className="block hover:underline"
              >
                블로그 포스트
              </Link>
              <Link
                href="https://github.com/forestream/whatever-react"
                target="_blank"
                className="hover:underline"
              >
                Github 레포지토리
              </Link>
            </p>
          </ProjectArticleDescription>
        </ProjectArticleContent>
      </ProjectArticleProvider>
    </section>
  );
}
