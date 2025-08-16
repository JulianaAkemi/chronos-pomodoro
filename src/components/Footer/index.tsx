import { RouterLink } from "../RouterLink";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href="/about-pomodoro/">
        How the Pomodoro Method works
      </RouterLink>

      <RouterLink href="/">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Made with 💚🧠
      </RouterLink>
    </footer>
  );
}
