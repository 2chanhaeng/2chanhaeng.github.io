import type { MDXComponents } from "mdx/types";
import { H1,
  H2,
  H3,
  Img,
  Anchor,
} from "@/components/mdx";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: H1,
    h2: H2,
    h3: H3,
    img: Img,
    a: Anchor,
    ...components,
  };
}
