"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";

export default function useIntersectionObserver(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
) {
  const ref = useRef<Set<Node | null>>(new Set());

  const addRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      ref.current.add(node);
    }

    return () => {
      ref.current.delete(node);
    };
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(callback, options);

    ref.current.forEach((node) => {
      io.observe(node as Element);
    });
  }, []);

  return { addRef };
}
