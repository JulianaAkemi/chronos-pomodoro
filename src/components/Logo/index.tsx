import { TimerIcon } from "lucide-react";
import styles from "./styles.module.css";
import { Heading } from "../Heading";

export function Logo() {
  return (
    <Heading>
      <div className={styles.logo}>
        <a className={styles.logoLink} href="#">
          <TimerIcon />

          <span>Chronos</span>
        </a>
      </div>
    </Heading>
  );
}
