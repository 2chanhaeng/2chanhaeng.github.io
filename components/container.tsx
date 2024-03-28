type Props = {
  children?: React.ReactNode;
};

export default function Container({ children }: Props) {
  return <main className="container mx-auto px-5">{children}</main>;
}
