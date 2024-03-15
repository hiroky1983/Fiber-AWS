import { TopClient } from "@/components/client/top";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <TopClient />
    </main>
  );
}
