import Link from "next/link";
import styles from "../styles/relatedCoins.module.css";

import { headers } from "next/headers";

export default async function RelatedCoins({ relatedCoins }: any) {
  const headerList = headers();
  const domainName = (await headerList).get("host");
  let protocal: string = "";

  const coinData = {
    one: {
      imageURL: "",
      years: "",
      name: "",
    },
    two: {
      imageURL: "",
      years: "",
      name: "",
    },
    three: {
      imageURL: "",
      years: "",
      name: "",
    },
    four: {
      imageURL: "",
      years: "",
      name: "",
    },
  };

  try {
    const response = await fetch(
      `https://${domainName}/api/coins/${relatedCoins[0][0]}/${relatedCoins[0][1]}`,
    );
    const json: any = await response.json();

    protocal = "https://";

    coinData.one.imageURL = json["data"]["full"];
    coinData.one.years = json["data"]["datesMinted"];
    coinData.one.name = json["data"]["title"];
  } catch (e) {
    const response = await fetch(
      `http://${domainName}/api/coins/${relatedCoins[0][0]}/${relatedCoins[0][1]}`,
    );
    const json: any = JSON.parse(await response.json());

    coinData.one.imageURL = json["data"]["full"];
    coinData.one.years = json["data"]["datesMinted"];
    coinData.one.name = json["data"]["title"];

    protocal = "http://";
  }

  const second = await fetch(
    `${protocal}${domainName}/api/coins/${relatedCoins[1][0]}/${relatedCoins[1][1]}`,
  );
  const secondJson = JSON.parse(await second.json());

  coinData.two.imageURL = secondJson["data"]["full"];
  coinData.two.years = secondJson["data"]["datesMinted"];
  coinData.two.name = secondJson["data"]["title"];

  const three = await fetch(
    `${protocal}${domainName}/api/coins/${relatedCoins[2][0]}/${relatedCoins[2][1]}`,
  );
  const threeJson = JSON.parse(await three.json());

  coinData.three.imageURL = threeJson["data"]["full"];
  coinData.three.years = threeJson["data"]["datesMinted"];
  coinData.three.name = threeJson["data"]["title"];

  const four = await fetch(
    `${protocal}${domainName}/api/coins/${relatedCoins[3][0]}/${relatedCoins[3][1]}`,
  );
  const fourJson = JSON.parse(await four.json());

  coinData.four.imageURL = fourJson["data"]["full"];
  coinData.four.years = fourJson["data"]["datesMinted"];
  coinData.four.name = fourJson["data"]["title"];

  return (
    <section className={styles.related}>
      <section className={`${styles.item_1} ${styles.item}`}>
        <Link
          className="no_deceration"
          href={`/entries/${relatedCoins[0]}`}
          target="_blank"
        >
          <picture className={`${styles.image}`}>
            <source
              className={`${styles.image}`}
              src={coinData["one"]["imageURL"]}
            />

            <img
              alt={`Image of the ${relatedCoins[0]}`}
              className={`${styles.image}`}
              src={coinData["one"]["imageURL"]}
            />
          </picture>

          <p>{`${coinData["one"]["name"]} (${coinData["one"]["years"]})`}</p>
        </Link>
      </section>

      <section className={`${styles.item_2} ${styles.item}`}>
        <Link
          className="no_deceration"
          href={`/entries/${relatedCoins[1]}`}
          target="_blank"
        >
          <picture className={`${styles.image}`}>
            <source
              className={`${styles.image}`}
              src={coinData["two"]["imageURL"]}
            />

            <img
              alt={`Image of the ${relatedCoins[1]}`}
              className={`${styles.image}`}
              src={coinData["two"]["imageURL"]}
            />
          </picture>

          <p>{`${coinData["two"]["name"]} (${coinData["two"]["years"]})`}</p>
        </Link>
      </section>

      <section className={`${styles.item_3} ${styles.item}`}>
        <Link
          className="no_deceration"
          href={`/entries/${relatedCoins[2]}`}
          target="_blank"
        >
          <picture className={`${styles.image}`}>
            <source
              className={`${styles.image}`}
              src={coinData["three"]["imageURL"]}
            />

            <img
              alt={`Image of the ${relatedCoins[2]}`}
              className={`${styles.image}`}
              src={coinData["three"]["imageURL"]}
            />
          </picture>

          <p>{`${coinData["three"]["name"]} (${coinData["three"]["years"]})`}</p>
        </Link>
      </section>

      <section className={`${styles.item_4} ${styles.item}`}>
        <Link
          className="no_deceration"
          href={`/entries/${relatedCoins[3]}`}
          target="_blank"
        >
          <picture className={`${styles.image}`}>
            <source
              className={`${styles.image}`}
              src={coinData["four"]["imageURL"]}
            />

            <img
              alt={`Image of the ${relatedCoins[3]}`}
              className={`${styles.image}`}
              src={coinData["four"]["imageURL"]}
            />
          </picture>

          <p>{`${coinData["four"]["name"]} (${coinData["four"]["years"]})`}</p>
        </Link>
      </section>
    </section>
  );
}
