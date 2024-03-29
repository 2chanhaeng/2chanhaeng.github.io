import type React from "react";
import Link, { LinkProps } from "next/link";

export default function Anchor(
  props: React.AnchorHTMLAttributes<HTMLAnchorElement>
) {
  return (
    <Link
      {...(props as LinkProps)}
      style={{ textDecoration: "underline", ...props.style }}
    />
  );
}
