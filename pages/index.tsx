import Head from 'next/head'
import Link from 'next/link'

import { getSortedEntriesData } from '../lib/javascript/entries.js';
import Footer from '../lib/components/footer'

import styles from '../styles/home.module.css'

export default function Home({allEntryData}: any) {
  interface Coin {
    "title": string,
    "codeTitle": string,
    "full": string;
    "id": string;
  }

  return (
    <div>
      <Head>
        <title>Home</title>

        <link rel="apple-touch-icon" sizes="180x180" href="https://raw.githubusercontent.com/Coin-Catalog/Main-content/main/public/images/Favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://raw.githubusercontent.com/Coin-Catalog/Main-content/main/public/images/Favicon.png" />
      </Head>

      <header>
        <h1>Home of Coin Catalog</h1>
          <p>Coin catalog is filled with details about coins from America. Use the links below to navitagte to the coins you want to view.</p>
      </header>

      <main>
        <div className={`${styles.home_coins}`}>
          {allEntryData.map(({ title, codeTitle, full, id }: Coin, index: number) => (
            <>
              <Link href={`/entries/${codeTitle}`} key={id} className={`${styles.home_coin} no_deceration`} style={{ gridColumn: `${(index % 3) + 1} / span 1`, gridRow: `${Math.floor(index / 3) + 1} / span 1` }} >
                <picture className={`${styles.profile_img}`}>
                  <source src={full} className={`${styles.profile_img}`} />
                  
                  <img src={full} alt={`Image of the reverse of a ${title} as well as the obverse of a ${title}`} className={`${styles.profile_img}`} />
                </picture>

                <p>{title}</p>
              </Link>
            </>
          ))}

        </div>
      </main>

      <br />
      <hr />
      <br />

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const allEntryData = getSortedEntriesData()
  return {
    props: {
      allEntryData
    }
  }
}