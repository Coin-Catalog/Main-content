import Link from 'next/link'
import styles from '../../styles/footer.module.css'

export default function Footer() {
  return (
    <footer>
      <p>
        <Link className={styles.footer} href="/">Home</Link>|<a className={styles.footer} href="https://contributing.coincatalog.org">Contribute</a>|<a className={styles.footer} href='https://github.com/Coin-Catalog'>Github</a>
      </p>
    </footer>
  )
}