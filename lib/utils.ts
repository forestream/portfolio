import { clsx, type ClassValue } from "clsx";
import { MutableRefObject, RefCallback } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function manageRef(
  node: HTMLElement | null,
  ...refs: (RefCallback<unknown> | MutableRefObject<HTMLElement | null>)[]
) {
  const cleanups = refs.map<(() => void) | null | void>(() => null);

  refs.forEach((ref, i) => {
    if (typeof ref === "function") {
      cleanups[i] = ref(node);
    } else {
      ref.current = node;
      cleanups[i] = () => {
        ref.current = null;
      };
    }
  });

  return () => {
    cleanups.forEach((cleanup) => cleanup && cleanup());
  };
}
