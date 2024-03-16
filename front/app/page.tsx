import { TopClient } from "@/components/client/top";
import styles from "./page.module.css";
import { TopServer } from "@/components/server/top";

export default function Home() {
  return (
    <main className={styles.main}>
      <TopServer />
      <TopClient />
    </main>
  );
}
