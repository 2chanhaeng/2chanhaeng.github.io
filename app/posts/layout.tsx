import { Metadata } from "next";
import { Comments } from "@/components/Comments";
import Container from "@/components/container";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Posts",
};

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
