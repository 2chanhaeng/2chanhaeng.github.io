import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function H2({ children }: Props) {
  return (
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-6 text-center md:text-left">
      {children}
    </h1>
  );
}
