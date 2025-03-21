"use client";

import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { ComponentPropsWithoutRef } from "react";

type CarouselClientProps = {
  speed?: number;
};

export default function CarouselClient({
  speed = 0.4,
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div"> & CarouselClientProps) {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        AutoScroll({
          startDelay: 0,
          speed,
          stopOnMouseEnter: true,
          stopOnInteraction: true,
        }),
      ]}
      className={className}
      {...props}
    >
      {children}
      <CarouselPrevious className="absolute left-4" />
      <CarouselNext className="absolute right-4" />
    </Carousel>
  );
}
