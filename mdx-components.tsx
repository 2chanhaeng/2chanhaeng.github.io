import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";
import { H1, Img, Anchor } from "@/components/mdx";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: H1,
    img: Img,
    a: Anchor,
    ...components,
  };
}
