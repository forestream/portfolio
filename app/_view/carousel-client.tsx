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
			plugins={[
				AutoScroll({
					startDelay: 0,
					speed: 0.4,
					stopOnMouseEnter: true,
					stopOnInteraction: false,
				}),
			]}
			className={className}
			{...props}
		>
			{children}
		</Carousel>
	);
}
