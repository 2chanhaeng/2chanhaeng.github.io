import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function H4({ children }: Props) {
  return (
    <h1 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-2 text-center md:text-left">
      {children}
    </h1>
  );
}
