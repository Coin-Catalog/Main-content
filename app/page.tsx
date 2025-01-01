import Head from "next/head";
import Link from "next/link";
import { headers } from "next/headers";

import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

import styles from "./styles/home.module.css";

export default async function Page() {
  const headerList = headers();
  const domainName = (await headerList).get("host");
  let entries;

  try {
    const response = await fetch(`https://${domainName}/api/entries`, {
      method: "GET",
    });

    if (response.status > 300 || response.status < 200) {
      // toast error
    }

    const json = await response.json();

    entries = JSON.parse(json)["entries"];
  } catch (e) {
    const response = await fetch(`http://${domainName}/api/entries`, {
      method: "GET",
    });

    if (response.status > 300 || response.status < 200) {
      // toast error
    }

    const json = await response.json();

    entries = JSON.parse(json)["entries"];
  }

  interface Coin {
    title: string;
    codeTitle: string;
    full: string;
    id: string;
    cat: string;
  }

  const entryJSX = entries.map(
    ({ title, codeTitle, full, id, cat }: Coin, index: number) => (
      <Card
        key={id}
        className={`${styles.home_coin} ${Number(id) % 3 == 0 ? "column-1" : Number(id) % 2 ? "column-2" : "column3"}`}
      >
        <Link
          className={`${styles.home_coin} no_deceration`}
          href={`/coin/${cat}/${codeTitle}`}
          style={{
            gridColumn: `${(index % 3) + 1} / span 1`,
            gridRow: `${Math.floor(index / 3) + 1} / span 1`,
          }}
        >
          <CardBody>
            <Image
              alt={`Image of the reverse of a ${title} as well as the obverse of a ${title}`}
              className={`${styles.profile_img}`}
              src={full}
            />
          </CardBody>

          <CardHeader>{title}</CardHeader>
        </Link>
      </Card>
    ),
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>

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
      </Head>

      <header className={`${styles.header}`}>
        <h1>Home of Coin Catalog</h1>
        <p>
          Coin catalog is filled with details about coins from America. Use the
          links below to navitagte to the coins you want to view.
        </p>
      </header>

      <br />

      <div className={`${styles.home_coins}`}>{entryJSX}</div>
    </div>
  );
}
