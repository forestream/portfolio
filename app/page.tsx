"use client";

import IconNextJs from "@/components/icon/IconNextJs";
import IconReact from "@/components/icon/IconReact";
import IconTailwind from "@/components/icon/IconTailwind";
import IconTanstackQuery from "@/components/icon/IconTanstackQuery";
import IconTypescript from "@/components/icon/IconTypescript";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useSplitFlapContext } from "@/hooks/useSplitFlapContext";
import useSwipe from "@/hooks/useSwipe";
import useTypingEffect from "@/hooks/useTypingEffect";
import {
  SPLIT_FLAP_WORDS,
  TYPING_HELLO,
  TYPING_INTRODUCTION,
} from "@/lib/constants";
import {
  RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import ProjectsSection from "./_view/ProjectsSection";
import zustand from "./images/zustand.png";
import Image from "next/image";
import IconFirebase from "@/components/icon/IconFirebase";
import IconHtml from "@/components/icon/IconHtml";
import IconCss from "@/components/icon/IconCss";
import IconJavascript from "@/components/icon/IconJavascript";

export default function App() {
  /**
   * 타이핑 효과
   */
  const { frame: hello } = useTypingEffect(TYPING_HELLO, 20, 0);
  const { frame: introduction } = useTypingEffect(TYPING_INTRODUCTION, 40, 900);
  const navSwiper = useSwipe();
  const stackSwiper = useSwipe();

  /**
   * 스와이핑 효과
   */
  useLayoutEffect(() => {
    navSwiper.swipe("out", "bottom");
    stackSwiper.initialize();
    stackSwiper.swipe("out", "top");
  }, [navSwiper, stackSwiper]);

  useEffect(() => {
    setTimeout(() => {
      navSwiper.addTransition();
      stackSwiper.addTransition();
      navSwiper.swipe("in", "bottom");
      stackSwiper.swipe("in", "top");
    }, 2500);
  }, [navSwiper, stackSwiper]);

  const [stackVisible, setStackVisible] = useState(true);

  const handleSwipeStack = (type: "in" | "out") => {
    if (type === "in") {
      setStackVisible(true);
      stackSwiper.addTransition();
      stackSwiper.swipe("in", "top");
    } else {
      setStackVisible(false);
      stackSwiper.addTransition();
      stackSwiper.swipe("out", "top");
    }
  };

  const projectsRef = useRef<HTMLElement | null>(null);

  const handleScroll = (ref: RefObject<HTMLElement>) => {
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const { setText } = useSplitFlapContext();

  const ioCallback = useCallback<IntersectionObserverCallback>(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setText(SPLIT_FLAP_WORDS[entry.target.id]);
        }
      });
    },
    [setText],
  );
  const ioInit = useMemo<IntersectionObserverInit>(
    () => ({
      threshold: 0,
      rootMargin: "-10% 0% -70% 0%",
    }),
    [],
  );

  const { addRef } = useIntersectionObserver(ioCallback, ioInit);

  const stackRefCallback = useCallback(
    (node: HTMLElement | null) => {
      const ioCleanup = addRef(node);
      stackSwiper.ref.current = node;

      return () => {
        ioCleanup();
        stackSwiper.ref.current = null;
      };
    },
    [addRef, stackSwiper.ref],
  );
  const projectsRefCallback = useCallback(
    (node: HTMLElement) => {
      const ioCleanup = addRef(node);
      projectsRef.current = node;

      return () => {
        ioCleanup();
        projectsRef.current = null;
      };
    },
    [addRef],
  );

  return (
    <main className="px-4 pt-24 lg:px-[260px] lg:pt-24">
      <section className="flex h-[100vh] flex-col items-center justify-start gap-4 text-orange-900 lg:justify-center">
        <h1 className={twMerge("text-lg font-normal lg:mb-8 lg:text-4xl")}>
          {hello}
        </h1>
        <h1
          id="introduction"
          ref={addRef}
          className={twMerge("mb-8 text-2xl font-semibold lg:text-6xl")}
        >
          {introduction}
        </h1>
        <div
          ref={navSwiper.ref as RefObject<HTMLDivElement>}
          className="relative z-10 mt-2 mb-8 flex gap-12 text-xl font-bold opacity-0 lg:mt-8 lg:mb-0 lg:text-4xl"
        >
          <button
            className="cursor-pointer"
            onClick={() => handleSwipeStack(stackVisible ? "out" : "in")}
          >
            기술 스택
          </button>
          <button
            className="cursor-pointer"
            onClick={() => handleScroll(projectsRef)}
          >
            프로젝트
          </button>
        </div>
        <article className="flex w-full items-center justify-center overflow-hidden lg:mt-16">
          <div
            id="stack"
            ref={stackRefCallback}
            className="font-noto-sans flex h-[300px] w-full -translate-y-full flex-col flex-wrap items-start gap-4 opacity-0 select-none lg:h-auto lg:flex-row lg:items-center lg:gap-6"
          >
            <div className="flex items-center gap-2 lg:w-[300px] lg:gap-8">
              <IconHtml className="aspect-square h-8 lg:h-18" />
              <span className="text-lg font-light lg:text-3xl">HTML</span>
            </div>
            <div className="flex items-center gap-2 lg:w-[300px] lg:gap-8">
              <IconCss className="aspect-square h-8 lg:h-18" />
              <span className="text-lg font-light lg:text-3xl">CSS</span>
            </div>
            <div className="flex items-center gap-2 lg:w-[300px] lg:gap-8">
              <IconJavascript className="aspect-square h-8 lg:h-18" />
              <span className="text-lg font-light lg:text-3xl">Javascript</span>
            </div>
            <div className="flex items-center gap-2 lg:w-[300px] lg:gap-8">
              <IconReact className="aspect-square h-8 lg:h-18" />
              <span className="text-lg font-light lg:text-3xl">React</span>
            </div>
            <div className="flex items-center gap-2 lg:w-[300px] lg:gap-8">
              <IconNextJs className="aspect-square h-8 lg:h-18" />
              <span className="text-lg font-light lg:text-3xl">Next.js</span>
            </div>
            <div className="flex items-center gap-2 lg:w-[300px] lg:gap-8">
              <IconTypescript className="aspect-square h-8 lg:h-18" />
              <span className="text-lg font-light lg:text-3xl">Typescript</span>
            </div>
            <div className="flex items-center gap-2 lg:w-[300px] lg:gap-8">
              <IconTailwind
                text={false}
                className="aspect-square h-8 lg:h-18"
              />
              <span className="text-baselgt-light lg:text-3xl">
                Tailwind CSS
              </span>
            </div>
            <div className="flex items-center gap-2 lg:w-[300px] lg:gap-8">
              <IconTanstackQuery className="aspect-square h-8 lg:h-18" />
              <span className="text-baselgt-light lg:text-3xl">
                Tanstack Query
              </span>
            </div>
            <div className="flex items-center gap-2 lg:w-[300px] lg:gap-8">
              <div className="relative aspect-square h-8 lg:h-18">
                <Image src={zustand} alt="zustand image" fill />
              </div>
              <span className="text-baselgt-light lg:text-3xl">Zustand</span>
            </div>
            <div className="flex items-center gap-2 lg:w-[300px] lg:gap-8">
              <IconFirebase className="aspect-square h-8 w-min lg:h-18" />
              <span className="text-baselgt-light lg:text-3xl">Firebase</span>
            </div>
          </div>
        </article>
      </section>
      <ProjectsSection ref={projectsRefCallback} />
    </main>
  );
}
