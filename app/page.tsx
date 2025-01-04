import Link from "next/link";
import { redirect } from "next/navigation";

export default function Page() {
	redirect(
		"https://just-perigee-eb1.notion.site/Portfolio-16e1388876c380c8b453eaf46b0b47f8"
	);

	return (
		<main className="ml-10">
			<p>제 포트폴리오를 노션으로 옮겼습니다.</p>
			<Link
				href="https://just-perigee-eb1.notion.site/Portfolio-16e1388876c380c8b453eaf46b0b47f8"
				className="font-bold underline hover:text-gray-500"
			>
				노션 포트폴리오로 이동
			</Link>
		</main>
	);
}
