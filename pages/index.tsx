import Head from 'next/head'
import Link from 'next/link'

import Footer from '../lib/components/footer'

import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <header>
        <h1>Home of Coin Catalog</h1>
          <p>Coin catalog is filled with details about coins from America. Use the links below to navitagte to the coins you want to view.</p>
      </header>

      <main>
        <div className={`${styles.home_coins}`}>
          <section>  
            <div className={`${styles.home_penneys}`}>
              <Link href="/pennies/small-cents" target="_blank" className={`${styles.section_link}`}>
                <picture className={`${styles.profile_img}`}>
                  <source src="./images/pennies/SC/PNGs/mainLincoln.png" className={`${styles.profile_img}`} />

                  <img src="./images/pennies/SC/PNGs/mainLincoln.png" alt="Image of the reverse of a wheat and sheild penney as well as the obverse of a 2019 penney" className={`${styles.profile_img}`} />
                </picture>

                Small cents were first minted in 1856 and were first put into circulation a year later in 1857. They are still minted to this day.
              </Link>
            </div>
          </section>
        </div>
      </main>

      <br />
      <hr />
      <br />

      <Footer />
    </div>
  )
}