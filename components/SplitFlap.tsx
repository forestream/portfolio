"use client";

import { useSplitFlapContext } from "@/hooks/useSplitFlapContext";
import clsx from "clsx";
import {
  ComponentPropsWithoutRef,
  Fragment,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import { twMerge } from "tailwind-merge";

type SplitFlapCardProps = {
  char: string;
  mode?: "open" | "close";
};

export function SplitFlapCard({ char, mode = "open" }: SplitFlapCardProps) {
  const upper = useRef<HTMLDivElement | null>(null);
  const lower = useRef<HTMLDivElement | null>(null);

  const getRandom = useCallback(
    () => Math.floor(2000 + (Math.random() * 1000 - 500)),
    [],
  );

  useLayoutEffect(() => {
    if (mode === "open") {
      lower.current?.classList.add("-rotate-x-180");
    } else {
      lower.current?.classList.remove("-rotate-x-180");
    }
  }, [char, mode]);

  useEffect(() => {
    if (mode === "open") {
      setTimeout(() => {
        lower.current?.classList.remove("-rotate-x-180");
      }, 0);
    } else {
      setTimeout(() => {
        upper.current?.classList.add("rotate-x-180");
      }, 0);
    }

    if (!lower.current || !upper.current) return;
    lower.current.style.transitionDuration = getRandom() + "ms";
    upper.current.style.transitionDuration = getRandom() + "ms";
  }, [char, getRandom, mode]);

  return (
    <div className="relative h-12 w-10 md:h-auto">
      <div
        ref={upper}
        className={twMerge(
          "absolute top-0 right-0 left-0 inline-block h-1/2 min-w-full origin-bottom overflow-hidden rounded-t bg-orange-400 transition-transform duration-500 ease-[cubic-bezier(0,1.5,0.9,0.9)] backface-hidden",
        )}
      >
        <p className="flex h-[200%] items-center justify-center">
          <span className="flex items-center justify-center text-lg text-white md:text-2xl">
            {char}
          </span>
        </p>
      </div>
      <div
        ref={lower}
        className={twMerge(
          "absolute right-0 bottom-0 left-0 inline-block h-1/2 min-w-full origin-top -rotate-x-180 overflow-hidden rounded-b bg-orange-400 transition-transform duration-500 ease-[cubic-bezier(0,1.5,0.9,0.9)] backface-hidden",
          clsx(mode === "open" && "z-10"),
        )}
      >
        <p className="flex h-[200%] -translate-y-1/2 items-center justify-center">
          <span className="flex items-center justify-center text-lg text-white md:text-2xl">
            {char}
          </span>
        </p>
      </div>
      <div className="relative -z-10 p-2 text-white/0">
        <span className="bottom-0 text-4xl">{char}</span>
      </div>
    </div>
  );
}

type SplitFlapProps = {
  fontSize: number;
};

export default function SplitFlap({
  className,
  ...props
}: ComponentPropsWithoutRef<"div"> & SplitFlapProps) {
  const { text } = useSplitFlapContext();
  const prevSplitText = useRef<string[]>([]);

  const splitText = useMemo(
    () => text.split("").filter((char) => char !== " "),
    [text],
  );

  useEffect(() => {
    prevSplitText.current = splitText;
  }, [splitText, text]);

  return (
    <div
      className={twMerge("relative h-10 select-none md:h-15", className)}
      style={{ width: splitText.length * 54 + "px" }}
      {...props}
    >
      <div className="absolute flex w-full gap-1">
        {splitText.map((char, i) => (
          <SplitFlapCard key={char + i} char={char} />
        ))}
      </div>
      {prevSplitText.current && (
        <div className="absolute flex w-full gap-1">
          {splitText.map((char, i) => (
            <Fragment key={char + i}>
              {i < splitText.length && (
                <SplitFlapCard mode="close" char={prevSplitText.current[i]} />
              )}
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
