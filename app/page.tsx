"use client";

import Head from "next/head";
import Link from "next/link";

import { useEffect, useState } from "react";

//import Footer from '../components/footer.jsx'

import styles from "./styles/home.module.css";

export default function Page() {
  interface Coin {
    title: string;
    codeTitle: string;
    full: string;
    id: string;
  }

  let [entryData, setEntryData] = useState(<p>Loading...</p>);

  useEffect(() => {
    fetch("/api/entries", {
      method: "GET",
    })
      .then((response) => {
        if (response.status > 300 || response.status < 200) {
          // toast error
        }

        return response;
      })
      .then((data) => data.json())
      .then((json) => {
        const entries = JSON.parse(json)["entries"];

        setEntryData(
          entries.map(({ title, codeTitle, full, id }: Coin, index: number) => (
            <>
              <Link
                key={id}
                className={`${styles.home_coin} no_deceration`}
                href={`/entries/${codeTitle}`}
                style={{
                  gridColumn: `${(index % 3) + 1} / span 1`,
                  gridRow: `${Math.floor(index / 3) + 1} / span 1`,
                }}
              >
                <picture className={`${styles.profile_img}`}>
                  <source className={`${styles.profile_img}`} src={full} />

                  <img
                    alt={`Image of the reverse of a ${title} as well as the obverse of a ${title}`}
                    className={`${styles.profile_img}`}
                    src={full}
                  />
                </picture>

                <p>{title}</p>
              </Link>
            </>
          )),
        );
      });
  }, []);

  return (
    <div>
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

      <header>
        <h1>Home of Coin Catalog</h1>
        <p>
          Coin catalog is filled with details about coins from America. Use the
          links below to navitagte to the coins you want to view.
        </p>
      </header>

      <div key={Date.now()} className={`${styles.home_coins}`}>
        {entryData}
      </div>

      <br />
      <hr />
      <br />

      {/*<Footer />*/}
    </div>
  );
}
