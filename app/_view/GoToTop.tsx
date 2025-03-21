"use client";

import IconArrowUp from "@/components/icon/IconArrowUp";

export default function GoToTop() {
  const handleGoUp = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <button
      className="fixed right-4 bottom-4 h-12 w-12 cursor-pointer rounded-full border-[3px] bg-white"
      onClick={handleGoUp}
    >
      <IconArrowUp />
    </button>
  );
}
