"use client";

import { ReactNode } from "react";

export default function ClickToCopy({ children }: { children: ReactNode }) {
  return (
    <pre
      className="bg-fg/10 hover:bg-fg/90 hover:text-bg/90 p-1 rounded-md cursor-pointer"
      onClick={() => navigator.clipboard.writeText(children?.toString() ?? "")}
    >
      {children}
    </pre>
  );
}
