import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";
import { PostTitle } from "@/components/post-title";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <PostTitle>{children}</PostTitle>,
    img: (props) => (
      <Image
        width={600}
        height={400}
        style={{ width: "100vw" }}
        layout="responsive"
        // @ts-expect-error
        alt=""
        {...(props as ImageProps)}
      />
    ),
    a: (props) => (
      <Link {...(props as LinkProps)} style={{ textDecoration: "underline" }} />
    ),
    ...components,
  };
}
