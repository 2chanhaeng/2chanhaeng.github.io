import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import "./globals.css";
import { BLOG_NAME } from "@/lib/constants";

const nanum = Nanum_Gothic({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${BLOG_NAME}`,
    default: BLOG_NAME,
  },
  description: "A blog about programming and web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={nanum.className}>{children}</body>
    </html>
  );
}
