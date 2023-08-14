import Head from 'next/head'
import Link from 'next/link'

import { useRouter } from 'next/router'

import { getAllEntryIds, getEntryData } from '../../lib/javascript/entries.js';
import Footer from '../../lib/components/footer'
import RelatedCoins  from '../../lib/components/relatedCoins'

import styles from '../../styles/entry.module.css'

interface EntryDataInterface {
  "Designer": string,
  "Mints": string[],
  "contentHtml": string,
  "datesMinted": string,
  "id": string,
  "mintage": string,
  "obverse": string,
  "related": string[],
  "reverse": string,
  "title": string,
  "codeTitle": string,
  "full": string,
  "entryData": any
}

export default function Coin({ entryData }: EntryDataInterface) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{entryData.title} | US Coin Catalog</title>

        <link rel="apple-touch-icon" sizes="180x180" href="https://raw.githubusercontent.com/Coin-Catalog/Main-content/main/public/images/Favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://raw.githubusercontent.com/Coin-Catalog/Main-content/main/public/images/Favicon.png" />
      </Head>

      <nav className='no_deceration'>
        <p className='no_deceration noPadding'><Link href="/" className='no_deceration noPadding'>Home</Link> / <Link href={`/entries/${router.query.id}`} className='no_deceration noPadding'>{router.query.id}</Link></p>
      </nav>

      <h1>{entryData.title}</h1>

      <div className={styles.coin_profile}>
        <div className={styles.profile}>
        <picture>
          <source src={entryData.obverse} />
        </picture>
        <picture>
          <source src={entryData.reverse} />
        </picture>
  
        <p>
          Dates minted: {entryData.datesMinted}
          <br />
          Mints: {entryData.Mints.join(", ")}
          <br />
          total minted: {entryData.mintage}
          <br />
          Designer: {entryData.Designer}
        </p>
        </div>

        <div className={styles.secondary_part}>
          <div dangerouslySetInnerHTML={{ __html: entryData.contentHtml }} />
        </div>
      </div>

      <br />
      
      <RelatedCoins relatedCoins={entryData["related"]} />

      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllEntryIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const entryData = await getEntryData(params.id);

  return {
    props: {
      entryData,
    },
  };
}