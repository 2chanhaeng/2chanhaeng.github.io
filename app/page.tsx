import { Intro } from "@/components/intro";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
      <Link href="/posts">Posts</Link>
    </main>
  );
}
