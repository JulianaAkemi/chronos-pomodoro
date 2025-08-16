import styles from "./styles.module.css";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="/about-pomodoro/">How the Pomodoro Method works</Link>

      <Link to="/">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Made with 💚🧠
      </Link>
    </footer>
  );
}
