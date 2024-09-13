/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "forestream.github.io",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
