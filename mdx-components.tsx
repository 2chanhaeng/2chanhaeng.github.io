import type { MDXComponents } from "mdx/types";
import { H1,
  H2,
  Img,
  Anchor,
} from "@/components/mdx";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: H1,
    h2: H2,
    img: Img,
    a: Anchor,
    ...components,
  };
}
