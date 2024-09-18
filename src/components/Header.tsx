import { useLocale } from "~/hooks/useLocale";
import styles from "./Header.module.css";

function Header() {
  const _ = useLocale();
  return (
    <header class={styles.header}>
      <h1>🐭 whiskers</h1>

      <nav>
        <ul>
          <li></li>
        </ul>
      </nav>
    </header>
  );
}
export { Header };
