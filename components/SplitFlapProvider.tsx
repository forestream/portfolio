"use client";

import { SplitFlapContext } from "@/hooks/useSplitFlapContext";
import { PropsWithChildren, useMemo, useState } from "react";

export default function SplitFlapProvider({ children }: PropsWithChildren) {
  const [text, setText] = useState("");

  const value = useMemo(() => ({ text, setText }), [text]);

  return (
    <SplitFlapContext.Provider value={value}>
      {children}
    </SplitFlapContext.Provider>
  );
}
