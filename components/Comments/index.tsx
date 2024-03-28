"use client";

import { useEffect, useRef } from "react";
import { REPOSITORY } from "@/lib/constants";

export function Comments() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const scriptElem = document.createElement("script");
    scriptElem.src = "https://giscus.app/client.js";
    scriptElem.async = true;
    scriptElem.crossOrigin = "anonymous";

    scriptElem.setAttribute("data-repo", REPOSITORY);
    scriptElem.setAttribute("data-repo-id", "R_kgDOLWydiA");
    scriptElem.setAttribute("data-category", "Comments");
    scriptElem.setAttribute("data-category-id", "DIC_kwDOLWydiM4CeSnj");
    scriptElem.setAttribute("data-mapping", "pathname");
    scriptElem.setAttribute("data-strict", "0");
    scriptElem.setAttribute("data-reactions-enabled", "1");
    scriptElem.setAttribute("data-emit-metadata", "0");
    scriptElem.setAttribute("data-input-position", "top");
    scriptElem.setAttribute("data-theme", "preferred_color_scheme");
    scriptElem.setAttribute("data-lang", "ko");
    scriptElem.setAttribute("data-loading", "lazy");

    ref.current.appendChild(scriptElem);
  }, []);

  return <section ref={ref} />;
}
