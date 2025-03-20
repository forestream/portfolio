"use client";

import SplitFlap from "@/components/SplitFlap";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 border border-teal-100 px-12 py-4">
      <SplitFlap fontSize={24} />
    </header>
  );
}
