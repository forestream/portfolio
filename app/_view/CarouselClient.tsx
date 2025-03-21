"use client";

import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ComponentPropsWithoutRef } from "react";

export default function CarouselClient({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <Carousel opts={{ loop: true }} className={className} {...props}>
      {children}
      <CarouselPrevious className="absolute left-4 cursor-pointer" />
      <CarouselNext className="absolute right-4 cursor-pointer" />
    </Carousel>
  );
}
