"use client";

import SplitFlap from "@/components/SplitFlap";
import { useSplitFlapContext } from "@/hooks/useSplitFlapContext";
import { useMemo } from "react";

export default function Header() {
  const { text } = useSplitFlapContext();
  const splitText = useMemo(() => text.replaceAll(" ", ""), [text]);

  return (
    <header className="fixed top-0 right-0 left-0 z-10 px-2 py-2 md:px-12 md:py-4">
      <SplitFlap word={splitText} fontSize={24} width={40} height={48} />
      <hr className="mt-4 border border-orange-500/50" />
    </header>
  );
}
