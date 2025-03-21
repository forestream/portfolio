import { createContext, MutableRefObject, useContext } from "react";
import { Directive, Side } from "./useSwipe";

type TProjectArticleContext = {
  swiper: {
    ref: MutableRefObject<HTMLElement | null>;
    addTransition: () => void;
    removeTransition: () => void;
    swipe: (directive: Directive, side: Side) => void;
    initialize: () => void;
  };
  io: {
    addRef: (node: HTMLElement | null) => () => void;
  };
};

export const ProjectArticleContext =
  createContext<TProjectArticleContext | null>(null);

export const useProjectArticleContext = () => {
  const context = useContext(ProjectArticleContext);

  if (!context) {
    throw new Error("ProjectArticleProvider 컴포넌트 안에서 호출해야 합니다.");
  }

  return context;
};
