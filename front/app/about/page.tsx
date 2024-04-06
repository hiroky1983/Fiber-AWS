import { AboutClient } from "@/components/client/about";
import styles from "../page.module.css";

export default function page() {
  return (
    <main className={styles.main}>
      <AboutClient />
    </main>
  );
}
