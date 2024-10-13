"use client";

import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export default function ProjectDescription({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  // todo: 모달 구현
  return (
    <>
      <div className={twMerge(className)} {...props}>
        {children}
      </div>
    </>
  );
}
