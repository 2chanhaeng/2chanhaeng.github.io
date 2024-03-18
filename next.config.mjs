import withMDX from "@next/mdx";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkFrontmatter from "remark-frontmatter";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  output: "export",
  images: { unoptimized: true },
};

export default withMDX({
  options: {
    rehypePlugins: [rehypeKatex, rehypePrettyCode],
    remarkPlugins: [remarkMath, remarkFrontmatter],
    experimental: { mdxRs: true },
  },
})(nextConfig);
