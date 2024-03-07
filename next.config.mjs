import withMDX from "@next/mdx";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkFrontmatter from "remark-frontmatter";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  output: "export",
};

export default withMDX({
  options: {
    remarkPlugins: [rehypeKatex],
    rehypePlugins: [remarkMath, remarkFrontmatter],
  },
})(nextConfig);
