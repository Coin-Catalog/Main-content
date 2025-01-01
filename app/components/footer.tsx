import Link from "next/link";
import styles from "../styles/footer.module.css";

import { Divider } from "@nextui-org/divider";

export default function Footer() {
  return (
    <footer className={`${styles.footerContainer}`}>
      <br />
      <Divider />
      <br />

      <span className={`flex h-5 items-center space-x-4 ${styles.textStuff}`}>
        <Link className={styles.footer} href="/">
          Home
        </Link>
        <Divider orientation="vertical" />
        <a
          className={styles.footer}
          href="https://contributing.coincatalog.org"
        >
          Contribute
        </a>
        <Divider orientation="vertical" />
        <a className={styles.footer} href="https://github.com/Coin-Catalog">
          Github
        </a>
      </span>
    </footer>
  );
}
