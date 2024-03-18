import { Intro } from "@/components/intro";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
    </main>
  );
}
