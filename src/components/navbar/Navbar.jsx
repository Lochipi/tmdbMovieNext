import Link from "next/link";
import styles from "./page.module.css";

function Navbar() {
  return (
    <div className={styles.nav}>
      <h3>
        <Link href="/">OpenMovie</Link>
      </h3>
      <ul className={styles.links}>
        <li className={styles.link}>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
