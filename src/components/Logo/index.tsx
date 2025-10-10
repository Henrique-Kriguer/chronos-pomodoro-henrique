import { TimerIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Logo() {
  return (
   <div className={styles.logo}>
    <div className={styles.logoLink}>
      <a href="#">
        <TimerIcon size={60}/>
      </a>
    </div>
        <span>Chronos</span>
   </div>
  );
}
