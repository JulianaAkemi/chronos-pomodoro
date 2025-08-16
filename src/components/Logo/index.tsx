import { TimerIcon } from "lucide-react";
import styles from "./styles.module.css";
import { Heading } from "../Heading";
import { RouterLink } from "../RouterLink";

export function Logo() {
  return (
    <Heading>
      <div className={styles.logo}>
        <RouterLink href="/" className={styles.logoLink}>
          <TimerIcon />

          <span>Chronos</span>
        </RouterLink>
      </div>
    </Heading>
  );
}
