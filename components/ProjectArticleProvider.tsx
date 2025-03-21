import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import {
  ProjectArticleContext,
  useProjectArticleContext,
} from "@/hooks/useProjectArticleContext";
import useSwipe from "@/hooks/useSwipe";
import { manageRef } from "@/lib/utils";
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
} from "react";

export function ProjectArticleDescription({ children }: PropsWithChildren) {
  const { swiper } = useProjectArticleContext();

  return (
    <div
      ref={(node) => manageRef(node, swiper.ref)}
      className="text-lg font-semibold text-orange-950"
    >
      {children}
    </div>
  );
}

export function ProjectArticleContent({ children }: PropsWithChildren) {
  const { io } = useProjectArticleContext();

  return (
    <div
      className="flex gap-8 overflow-hidden"
      ref={(node) => manageRef(node, io.addRef)}
    >
      {children}
    </div>
  );
}

export function ProjectArticleProvider({ children }: PropsWithChildren) {
  const swiper = useSwipe();

  const ioCallback = useCallback<IntersectionObserverCallback>(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target.contains(swiper.ref.current)) {
          if (entry.isIntersecting) {
            swiper.swipe("in", "bottom");
          } else {
            swiper.swipe("out", "bottom");
          }
        }
      });
    },
    [swiper],
  );

  const ioInit = useMemo<IntersectionObserverInit>(
    () => ({
      threshold: 0.75,
    }),
    [],
  );

  const io = useIntersectionObserver(ioCallback, ioInit);

  useLayoutEffect(() => {
    swiper.initialize();
    swiper.swipe("out", "bottom");
  }, [swiper]);
  useEffect(() => {
    swiper.addTransition();
  }, [swiper]);

  const value = useMemo(() => ({ swiper, io }), []);

  return (
    <ProjectArticleContext.Provider value={value}>
      <article className="mb-16">{children}</article>
    </ProjectArticleContext.Provider>
  );
}
