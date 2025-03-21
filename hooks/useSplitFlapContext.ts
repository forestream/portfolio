"use client";

import { createContext, Dispatch, SetStateAction, useContext } from "react";

export const SplitFlapContext = createContext<{
  text: string;
  setText: Dispatch<SetStateAction<string>>;
} | null>(null);

export function useSplitFlapContext() {
  const context = useContext(SplitFlapContext);

  if (!context) {
    throw new Error(
      "SplitFlapContext는 SplitFlapProvider 컴포넌트 안에서 사용해야 합니다.",
    );
  }

  return context;
}
