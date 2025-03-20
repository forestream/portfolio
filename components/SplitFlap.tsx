"use client";

import { useSplitFlapContext } from "@/hooks/useSplitFlapContext";
import clsx from "clsx";
import {
  ComponentPropsWithoutRef,
  Fragment,
  useCallback,
  useEffect,
  useLayoutEffect,
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

  useLayoutEffect(() => {
    if (mode === "open") {
      lower.current?.classList.add("-rotate-x-180");
    } else {
      lower.current?.classList.remove("-rotate-x-180");
    }
  }, [char]);

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
  }, [char]);

  const getRandom = useCallback(
    () => Math.floor(2000 + (Math.random() * 1000 - 500)),
    [],
  );

  return (
    <div className="relative w-full">
      <div
        ref={upper}
        className={twMerge(
          "absolute top-0 right-0 left-0 inline-block h-1/2 min-w-12 origin-bottom overflow-hidden rounded-t bg-black transition-transform duration-500 ease-[cubic-bezier(0,1.5,0.9,0.9)] backface-hidden",
        )}
      >
        <p className="flex h-[200%] items-center justify-center">
          <span className="flex items-center justify-center text-2xl text-white">
            {char}
          </span>
        </p>
      </div>
      <div
        ref={lower}
        className={twMerge(
          "absolute right-0 bottom-0 left-0 inline-block h-1/2 min-w-12 origin-top -rotate-x-180 overflow-hidden rounded-b bg-black transition-transform duration-500 ease-[cubic-bezier(0,1.5,0.9,0.9)] backface-hidden",
          clsx(mode === "open" && "z-10"),
        )}
      >
        <p className="flex h-[200%] -translate-y-1/2 items-center justify-center">
          <span className="flex items-center justify-center text-2xl text-white">
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
  fontSize,
  className,
  ...props
}: ComponentPropsWithoutRef<"div"> & SplitFlapProps) {
  const { text } = useSplitFlapContext();
  const prevSplitText = useRef<string[]>([]);

  const splitText = text.split("").filter((char) => char !== " ");

  useEffect(() => {
    prevSplitText.current = splitText;
  }, [text]);

  return (
    <div
      className={twMerge("relative", className)}
      style={{ width: splitText.length * 54 + "px", height: 58 + "px" }}
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
