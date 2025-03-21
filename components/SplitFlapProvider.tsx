"use client";

import { SplitFlapContext } from "@/hooks/useSplitFlapContext";
import { PropsWithChildren, useState } from "react";

export default function SplitFlapProvider({ children }: PropsWithChildren) {
  const [text, setText] = useState("");

  return (
    <SplitFlapContext.Provider value={{ text, setText }}>
      {children}
    </SplitFlapContext.Provider>
  );
}
