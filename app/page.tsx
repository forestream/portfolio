"use client";

import { INTRODUCTION } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";

export default function App() {
	const [introduction, setIntroduction] = useState("");
	const typingsIndex = useRef<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIntroduction(INTRODUCTION[typingsIndex.current++]);
			if (typingsIndex.current >= INTRODUCTION.length) clearInterval(interval);
		}, 30);

		return () => clearInterval(interval);
	}, []);

	return (
		<main>
			<h1 className=" text-2xl font-extrabold">{introduction}</h1>
		</main>
	);
}
