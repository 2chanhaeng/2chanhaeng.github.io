import { Comments } from "@/components/Comments";
import Container from "@/components/container";
import Header from "@/components/Header";

export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Container>
        <article>{children}</article>
        <Comments />
      </Container>
    </>
  );
}
