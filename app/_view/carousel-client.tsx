"use client";

import { Carousel } from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { ComponentPropsWithoutRef } from "react";

export default function CarouselClient({
	children,
	className,
	...props
}: ComponentPropsWithoutRef<"div">) {
	return (
		<Carousel
			opts={{ loop: true }}
			plugins={[AutoScroll({ startDelay: 0, speed: 0.5 })]}
			className={className}
			{...props}
		>
			{children}
		</Carousel>
	);
}
