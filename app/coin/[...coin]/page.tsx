import Head from 'next/head';
import Link from 'next/link';
import { headers } from 'next/headers';

import { Card, CardHeader, CardBody } from '@nextui-org/card';
import { Image } from '@nextui-org/image';

import RelatedCoins from '@/app/components/relatedCoins';

import styles from './styles/entry.module.css';

interface EntryDataInterface {
  Designer: string;
  Mints: string[];
  contentHtml: string;
  datesMinted: string;
  id: string;
  mintage: string;
  obverse: string;
  related: string[];
  reverse: string;
  title: string;
  codeTitle: string;
  full: string;
  entryData: any;
}

export default async function Page({ params }: { params: Promise<{ coin: string }> }) {
  const headerList = headers();
  const domainName = (await headerList).get('host');
  const catagory = (await params).coin[0];
  const coin = (await params).coin[1];
  let protocal = '';

  let entryData: EntryDataInterface;

  try {
    const response = await fetch(`https://${domainName}/api/coins/${catagory}/${coin}`);
    const json: any = await response.json();

    protocal = 'https://';

    entryData = json['data'];
  } catch (e) {
    const response = await fetch(`http://${domainName}/api/coins/${catagory}/${coin}`);
    const json: any = await response.json();

    protocal = 'http://';

    entryData = JSON.parse(json)['data'];
  }

  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>{entryData.title} | US Coin Catalog</title>

        <link
          href="https://raw.githubusercontent.com/Coin-Catalog/Main-content/main/public/images/Favicon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="https://raw.githubusercontent.com/Coin-Catalog/Main-content/main/public/images/Favicon.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />

        <link href={`${protocal}${domainName}/coin/${catagory}/${coin}`} rel="canonical" />
      </Head>

      <h1>{entryData.title}</h1>

      <nav className={`no_deceration ${styles.breadCrumbs}`}>
        <p className="no_deceration noPadding">
          <Link className="no_deceration noPadding" href="/">
            Home
          </Link>{' '}
          /&nbsp;
          <Link className="no_deceration noPadding" href={`/coin/${catagory}/${coin}`}>
            {coin}
          </Link>
        </p>
      </nav>

      <div className={styles.coin_profile}>
        <Card className={styles.profile}>
          <CardHeader>
            <Image
              alt={`Obverse and reverse of a ${entryData.title}`}
              className={styles.image}
              src={entryData.full}
            />
          </CardHeader>

          <CardBody>
            <p>
              Dates minted: {entryData.datesMinted}
              <br />
              Mints: {entryData.Mints.join(', ')}
              <br />
              Total minted: {entryData.mintage}
              <br />
              Designer: {entryData.Designer}
            </p>
          </CardBody>
        </Card>

        <Card className={styles.secondary_part}>
          <CardBody>
            <div dangerouslySetInnerHTML={{ __html: entryData.contentHtml }} />
          </CardBody>
        </Card>
      </div>

      <br />

      <RelatedCoins relatedCoins={entryData['related']} />
    </div>
  );
}
