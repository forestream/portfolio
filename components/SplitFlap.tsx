"use client";

import {
  RefCallback,
  RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";

type SplitFlapProps = {
  word: string;
  width?: number;
  height?: number;
  fontSize?: number;
};

export default function SplitFlap({
  word,
  width = 120,
  height = 160,
  fontSize = 128,
}: SplitFlapProps) {
  const prevRef = useRef("");

  useEffect(() => {
    prevRef.current = word;
  }, [word]);

  const currentBottom = useRef<Set<HTMLDivElement | null>>(new Set());
  const prevTop = useRef<Set<HTMLDivElement | null>>(new Set());
  const getRefCallback = useCallback<
    (ref: RefObject<Set<HTMLDivElement | null>>) => RefCallback<HTMLDivElement>
  >((ref) => {
    return (node) => {
      if (!ref.current) return;

      ref.current.add(node);

      return () => {
        if (!ref.current) return;
        ref.current.delete(node);
      };
    };
  }, []);

  useLayoutEffect(() => {
    currentBottom.current?.forEach((node) => {
      if (!node) return;
      node.classList.add("-rotate-x-180", "origin-top");
    });
  }, [word]);

  useEffect(() => {
    currentBottom.current?.forEach((node) => {
      if (!node) return;
      setTimeout(() => {
        node.classList.add("transition-transform", "duration-500", "ease");
        node.classList.remove("-rotate-x-180");
      }, 16);
    });

    prevTop.current?.forEach((node) => {
      if (!node) return;
      setTimeout(() => {
        node.classList.add(
          "transition-transform",
          "duration-500",
          "ease",
          "rotate-x-180",
          "origin-bottom",
        );
      }, 16);
    });
  }, [word]);

  return (
    <div className="flex w-full justify-start gap-2">
      {word.split("").map((char, i) => (
        <div style={{ width, height }} className="relative" key={char + i}>
          <div className="absolute top-0 right-0 left-0 h-1/2 rounded-t bg-orange-400">
            <div className="relative h-full w-full overflow-hidden">
              <span
                style={{ fontSize }}
                className="absolute top-0 right-0 left-0 flex h-[200%] w-full items-center justify-center text-white"
              >
                {char}
              </span>
            </div>
          </div>
          <div
            className="absolute right-0 bottom-0 left-0 z-10 h-1/2 origin-top -rotate-x-180 rounded-b bg-orange-400"
            ref={getRefCallback(currentBottom)}
          >
            <div className="relative h-full w-full overflow-hidden">
              <span
                style={{ fontSize }}
                className="absolute right-0 bottom-0 left-0 flex h-[200%] w-full items-center justify-center text-white"
              >
                {char}
              </span>
            </div>
          </div>
          {prevRef.current[i] && (
            <>
              <div
                className="absolute top-0 right-0 left-0 z-10 h-1/2 rounded-t bg-orange-400 backface-hidden"
                ref={getRefCallback(prevTop)}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <span
                    style={{ fontSize }}
                    className="absolute top-0 right-0 left-0 flex h-[200%] w-full items-center justify-center text-white"
                  >
                    {prevRef.current[i]}
                  </span>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 left-0 h-1/2 rounded-b bg-orange-400">
                <div className="relative h-full w-full overflow-hidden">
                  <span
                    style={{ fontSize }}
                    className="absolute right-0 bottom-0 left-0 flex h-[200%] w-full items-center justify-center text-white"
                  >
                    {prevRef.current[i]}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
