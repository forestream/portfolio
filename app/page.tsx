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
} from "react";
import { twMerge } from "tailwind-merge";

export default function App() {
  /**
   * 타이핑 효과
   */
  const { frame: hello } = useTypingEffect(TYPING_HELLO, 20, 0);
  const { frame: introduction } = useTypingEffect(TYPING_INTRODUCTION, 40, 900);
  const { ref, initialize, swipe, addTransition } = useSwipe();

  /**
   * 스와이핑 효과
   */
  useLayoutEffect(() => {
    swipe("out", "bottom");
  }, [initialize, swipe]);

  useEffect(() => {
    setTimeout(() => {
      addTransition();
      swipe("in", "bottom");
    }, 3000);
  }, [addTransition, swipe]);

  const stackRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);

  const handleScroll = (ref: RefObject<HTMLElement>) => {
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const { setText } = useSplitFlapContext();

  const ioCallback = useCallback<IntersectionObserverCallback>((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setText(SPLIT_FLAP_WORDS[entry.target.id]);
      }
    });
  }, []);
  const ioInit = useMemo<IntersectionObserverInit>(
    () => ({
      threshold: 0.5,
    }),
    [],
  );

  const { addRef } = useIntersectionObserver(ioCallback, ioInit);

  const stackRefCallback = useCallback((node: HTMLElement) => {
    const ioCleanup = addRef(node);
    stackRef.current = node;

    return () => {
      ioCleanup();
      stackRef.current = null;
    };
  }, []);
  const projectsRefCallback = useCallback((node: HTMLElement) => {
    const ioCleanup = addRef(node);
    projectsRef.current = node;

    return () => {
      ioCleanup();
      projectsRef.current = null;
    };
  }, []);

  return (
    <main className="p-24">
      <section
        id="introduction"
        ref={addRef}
        className="flex h-[100vh] flex-col items-center justify-center gap-4"
      >
        <h1 className={twMerge("mb-8 text-4xl font-normal")}>{hello}</h1>
        <h1 className={twMerge("mb-8 text-6xl font-semibold")}>
          {introduction}
        </h1>
        <div
          ref={ref as RefObject<HTMLDivElement>}
          className="mt-8 mb-60 flex gap-12 text-4xl font-bold opacity-0"
        >
          <button
            className="cursor-pointer"
            onClick={() => handleScroll(stackRef)}
          >
            <h2>기술 스택</h2>
          </button>
          <button
            className="cursor-pointer"
            onClick={() => handleScroll(projectsRef)}
          >
            <h2>프로젝트</h2>
          </button>
        </div>
      </section>
      <section
        ref={stackRefCallback}
        className="flex h-[100vh] items-center justify-center"
        id="stack"
      >
        <div className="font-noto-sans flex flex-col items-center gap-4">
          <div className="flex w-[400px] items-center gap-8">
            <IconReact className="aspect-square h-20" />
            <span className="text-3xl font-light">React</span>
          </div>
          <div className="flex w-[400px] items-center gap-8">
            <IconNextJs className="aspect-square h-20" />
            <span className="text-3xl font-light">Next.js</span>
          </div>
          <div className="flex w-[400px] items-center gap-8">
            <IconTypescript className="aspect-square h-20" />
            <span className="text-3xl font-light">Typescript</span>
          </div>
          <div className="flex w-[400px] items-center gap-8">
            <IconTailwind text={false} className="aspect-square h-20" />
            <span className="text-3xl font-light">Typescript</span>
          </div>
          <div className="flex w-[400px] items-center gap-8">
            <IconTanstackQuery className="aspect-square h-20" />
            <span className="text-3xl font-light">Tanstack Query</span>
          </div>
        </div>
      </section>
      <section
        ref={projectsRefCallback}
        className="h-[100vh]"
        id="projects"
      ></section>
    </main>
  );
}
