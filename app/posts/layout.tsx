import { Comments } from "@/components/Comments";
import Container from "@/components/container";
import Header from "@/components/header";

export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Container>
        <Header />
        <article>{children}</article>
        <Comments />
      </Container>
    </main>
  );
}
