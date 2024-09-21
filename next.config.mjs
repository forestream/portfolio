/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "forestream.github.io",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "img.shields.io",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
