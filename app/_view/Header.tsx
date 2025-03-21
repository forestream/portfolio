"use client";

import SplitFlap from "@/components/SplitFlap";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-10 border-b-2 border-teal-500 px-12 py-4">
      <SplitFlap fontSize={24} />
    </header>
  );
}
