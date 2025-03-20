"use client";

import useTypingEffect from "@/hooks/useTypingEffect";
import { TYPING_HELLO, TYPING_INTRODUCTION } from "@/lib/constants";
import { twMerge } from "tailwind-merge";

export default function App() {
  const { frame: introduction } = useTypingEffect(
    TYPING_INTRODUCTION,
    40,
    1000,
  );
  const { frame: hello } = useTypingEffect(TYPING_HELLO, 40, 0);

  return (
    <main>
      <section>
        <h1 className={twMerge("font-nanum text-4xl font-normal")}>{hello}</h1>
        <h1 className={twMerge("font-nanum text-4xl font-normal")}>
          {introduction}
        </h1>
      </section>
    </main>
  );
}
