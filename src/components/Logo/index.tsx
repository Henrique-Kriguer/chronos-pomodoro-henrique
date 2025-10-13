import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Logo() {
  return (
   <div>
      <a className={styles.logo} href="#">
        <TimerIcon />
        <span>Chronos</span>
      </a> 
   </div>
  );
}
